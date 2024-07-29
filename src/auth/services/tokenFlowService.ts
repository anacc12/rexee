// import { ServiceBase } from '@/data/service';

// type TokenFlowResponse = {
//     token: string;
//     refreshToken?: string;
//     expireTime: string;
// };

// export class TokenFlowService extends ServiceBase {
//     async refreshToken(refreshToken: string): Promise<TokenFlowResponse> {
//         const response = await this.http.instance.post('token-flow/refresh-token', undefined, {
//             headers: { Authorization: 'Bearer ' + refreshToken },
//         });
//         return response.data;
//     }
// }

// export default new TokenFlowService({ skipRequestInterceptor: true });
