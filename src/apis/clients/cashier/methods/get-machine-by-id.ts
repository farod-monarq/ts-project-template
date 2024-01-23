import { GameMachine } from '@mock-service/core';
import { InvokeMethod } from '../../../types/invoke';

export const getMachineById: InvokeMethod<{ id: string; query?: undefined; }, GameMachine> = async (instance, requestData, options) => {
	const response = await instance.get<GameMachine>(`/game-machines/${requestData.id}`, {});
	return response.data;
};