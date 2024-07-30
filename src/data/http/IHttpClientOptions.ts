export interface IHttpClientOptions {
    baseUrl?: string;
    headers?: Record<string, string | number | boolean>;
    skipRequestInterceptor?: boolean;
    skipResponseInterceptor?: boolean;
}
