import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export interface InvokeOptions {
  headers?: Record<string, string>;
  timeout?: number;
  query?: any;
}

export type InvokeMethod<Req extends any = any, Res extends any = any> = (
  instance: AxiosInstance,
  data: Req,
  options?: InvokeOptions
) => Promise<Res>;
