import * as qs from 'qs';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

import { IToken, authStore } from '../../auth';

import { IHttpClient } from './IHttpClient';
import { IHttpClientOptions } from './IHttpClientOptions';

export class HttpClientFactory {
    create(options: IHttpClientOptions): IHttpClient {
        const client = axios.create({
            baseURL: options.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            paramsSerializer: {
                serialize: (param) => qs.stringify(param, { arrayFormat: 'comma' }),
            },
        });

        !options.skipRequestInterceptor &&
            client.interceptors.request.use((config) => {
                const tokenItem = Cookies.get('token');

                if (tokenItem) {
                    const parsedToken = JSON.parse(tokenItem) as IToken;

                    if (new Date(parsedToken.expireTime).getTime() <= new Date().getTime()) {
                        !authStore.isDispatched && authStore.dispatchTokenEvent();

                        return new Promise((resolve, reject): void => {
                            authStore.refreshSubscribers.push((token: string) => {
                                config.headers = { ...config.headers, Authorization: 'Bearer ' + token } as any;

                                resolve(config);
                            });
                        });
                    }
                    const token = parsedToken.token;
                    config.headers = { ...config.headers, Authorization: 'Bearer ' + token } as any;
                }

                return config;
            });

        !options.skipResponseInterceptor &&
            client.interceptors.response.use(
                (response) => {
                    return response;
                },
                async (error: AxiosError) => {
                    if (error.response) {
                        const { status } = error.response;

                        switch (status) {
                            case 401:
                                !authStore.isDispatched && authStore.dispatchTokenEvent();
                                break;
                        }
                    }

                    return Promise.reject(error);
                }
            );

        return {
            instance: client,
        };
    }
}

export default HttpClientFactory;
