import axios from 'axios';
import { HttpClientFactory, IHttpClient } from '../../data/http';

type ServiceBaseInitialOptions = {
    skipRequestInterceptor?: boolean;
    skipResponseInterceptor?: boolean;
};

export class ServiceBase {
    // Your service base implementation
    protected http = axios.create({
      baseURL: process.env.REACT_APP_PROXY_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
