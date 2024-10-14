import { axiosConfig } from '@app/configs/api';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const API = axios.create(axiosConfig);

const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  return API({
    ...config,
    ...options,
  }).then((response) => response?.data);
};

type BodyType<Data> = Data;

type ErrorType<Error> = AxiosError<Error>;

export { createInstance, API };

export type { BodyType, ErrorType };
