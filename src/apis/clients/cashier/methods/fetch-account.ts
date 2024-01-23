import { InvokeMethod } from '../../../types/invoke';
import { ListAccountDTO } from '../dtos';
import { loopbackFilterMapper } from '../../../types/loopback-filter';

export const fetchAccount: InvokeMethod<ListAccountDTO, any[]> = async (instance, requestData, options) => {
	const filter = requestData ? loopbackFilterMapper(requestData) : {};
	const response = await instance.get('/accounts', { params: { filter: JSON.stringify(filter) } });
	return response.data;
};