import axios from 'axios';
import { HttpClientFactory, IHttpClient } from '../../data/http';

type ServiceBaseInitialOptions = {
    skipRequestInterceptor?: boolean;
    skipResponseInterceptor?: boolean;
};

export class ServiceBase {
    // Your service base implementation
    protected http = axios.create({
      // baseURL: process.env.REACT_APP_PROXY_BASE_URL || 'http://localhost:5000/api/v1/prod',
      baseURL: 'http://93.63.175.216:8000/api/v1/prod',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
