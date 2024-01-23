import { GameSessionOptions, SessionOptions } from '@mock-service/core';
import { InvokeMethod } from '../../../types/invoke';

export const getAccountById: InvokeMethod<GameSessionOptions, SessionOptions> = async (instance, requestData, options) => {
	return instance.post(``, requestData, options);
};