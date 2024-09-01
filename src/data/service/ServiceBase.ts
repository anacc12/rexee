import axios from 'axios';
import { HttpClientFactory, IHttpClient } from '../../data/http';

type ServiceBaseInitialOptions = {
    skipRequestInterceptor?: boolean;
    skipResponseInterceptor?: boolean;
};

export class ServiceBase {
    // Your service base implementation
    protected http = axios.create({
      baseURL: 'https://93.63.175.216:8000/api/v1/prod',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
