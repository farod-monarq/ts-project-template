import { AxiosInstance } from "axios";
import { InvokeMethod, InvokeOptions } from "./invoke";
import createAxiosInstance from "../http-instance";
import { EnvType } from "../../common/types";
import { Options } from "./options";

export abstract class ClientAPI {
	private readonly axiosInstance: AxiosInstance;

	abstract getEnvOptions(envType: EnvType): Options;
	constructor(envType: EnvType) {
		this.axiosInstance = createAxiosInstance(this.getEnvOptions(envType));
	}

	protected async invoke<Req extends any, Res extends any>(
		method: InvokeMethod<Req, Res>,
		requestData: Req,
		options?: InvokeOptions
	): Promise<Res> {
		try {
			const response = await method(this.axiosInstance, requestData, options);
			return response;
		} catch (error) {
			console.error('Error during API call:', error.message);
			throw error;
		}
	}
}