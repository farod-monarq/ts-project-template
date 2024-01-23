import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Options } from './types/options';

const createAxiosInstance = (opts: Options): AxiosInstance => {
	try {
		const axiosConfig: AxiosRequestConfig = {
			baseURL: opts.baseURL,
			timeout: opts.timeout || 5000,
			headers: opts.headers,
			// ...
		};
		const instance: AxiosInstance = axios.create(axiosConfig);
		return instance;
	} catch (error) {
		console.log(error);
		throw new Error(`Erreur lors de la création de l'instance Axios pour l'environnement : ${error.message}`);
	}
};
export default createAxiosInstance;