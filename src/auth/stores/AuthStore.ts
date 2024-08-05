import { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

import { IToken, tokenFlowService, authService, IAuthenticatedUser } from '../../auth';
import { jwtDecode } from 'jwt-decode';

class AuthStore {
    refreshSubscribers: any = [];
    isDispatched: boolean = false;

    syncToken = async () => {
        try {
            const tokenCookie = Cookies.get('token');

            if (tokenCookie) {
                const parsedToken = JSON.parse(tokenCookie);

                const response = await tokenFlowService.refreshToken(parsedToken.refreshToken);

                this.setToken({
                    token: response.token,
                    refreshToken: response.refreshToken,
                    expireTime: response.expireTime,
                });

                this.onTokenUpdate(response.token);
            } else {
                this.removeUser();
            }
        } catch (err) {
            this.removeUser();
        }
    };

    async onTokenUpdate(token: string) {
        this.isDispatched = false;

        this.refreshSubscribers.forEach((subscriber: (token?: string) => AxiosRequestConfig) => subscriber(token));

        this.refreshSubscribers = [];
    }

    setToken(token: IToken) {
        Cookies.set('token', JSON.stringify(token));
    }

    // async setUser() {
    //     try {
    //         const userData = await authService.getUser();
    //         Cookies.set('user', JSON.stringify(userData));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    async setUser() {
        try {
            const token = Cookies.get('token');
            const parsedToken = JSON.parse(token || '{}');
            const decodedUser = jwtDecode<IAuthenticatedUser>(parsedToken.token);
            Cookies.set('user', JSON.stringify(decodedUser));
          } catch (err) {
            console.log(err);
          }
      }
    
      async getUser(): Promise<IAuthenticatedUser | null> {
        const user = Cookies.get('user');
        return user ? JSON.parse(user) : null;
      }

    async dispatchTokenEvent() {
        this.isDispatched = true;

        await this.syncToken();

        setTimeout(() => (this.isDispatched = false), 1000);
    }

    async removeUser() {
        Cookies.remove('token');
        Cookies.remove('user');

        const tokenExpiredEvent = new Event('tokenExpired');
        window.dispatchEvent(tokenExpiredEvent);
    }
}

export default new AuthStore();
