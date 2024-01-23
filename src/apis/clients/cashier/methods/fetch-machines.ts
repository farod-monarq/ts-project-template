import { InvokeMethod } from '../../../types/invoke';
import { ListMachinesDTO } from '../dtos';
import { loopbackFilterMapper } from '../../../types/loopback-filter';

export const fetchMachines: InvokeMethod<ListMachinesDTO, any[]> = async (instance, requestData, options) => {
	const filter = requestData ? loopbackFilterMapper(requestData) : {};
	const response = await instance.get('/game-machines', { params: { filter: JSON.stringify(filter) } });
	return response.data;
};