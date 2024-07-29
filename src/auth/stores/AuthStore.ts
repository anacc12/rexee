// import { AxiosRequestConfig } from 'axios';
// import Cookies from 'js-cookie';

// import { IToken, tokenFlowService, authService } from '@/auth';

// class AuthStore {
//     refreshSubscribers: any = [];
//     isDispatched: boolean = false;

//     syncToken = async () => {
//         try {
//             const tokenCookie = Cookies.get('token');

//             if (tokenCookie) {
//                 const parsedToken = JSON.parse(tokenCookie);

//                 const response = await tokenFlowService.refreshToken(parsedToken.refreshToken);

//                 this.setToken({
//                     token: response.token,
//                     refreshToken: response.refreshToken,
//                     expireTime: response.expireTime,
//                 });

//                 this.onTokenUpdate(response.token);
//             } else {
//                 this.removeUser();
//             }
//         } catch (err) {
//             this.removeUser();
//         }
//     };

//     async onTokenUpdate(token: string) {
//         this.isDispatched = false;

//         this.refreshSubscribers.forEach((subscriber: (token?: string) => AxiosRequestConfig) => subscriber(token));

//         this.refreshSubscribers = [];
//     }

//     setToken(token: IToken) {
//         Cookies.set('token', token);
//     }

//     async setUser() {
//         try {
//             const userData = await authService.getUser();
//             Cookies.set('user', userData);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     async dispatchTokenEvent() {
//         this.isDispatched = true;

//         await this.syncToken();

//         setTimeout(() => (this.isDispatched = false), 1000);
//     }

//     async removeUser() {
//         Cookies.remove('token');
//         Cookies.remove('user');

//         const tokenExpiredEvent = new Event('tokenExpired');
//         window.dispatchEvent(tokenExpiredEvent);
//     }
// }

// export default new AuthStore();
