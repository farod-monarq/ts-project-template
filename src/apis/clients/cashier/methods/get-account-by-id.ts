import { InvokeMethod } from '../../../types/invoke';
import { Filter } from '@loopback/filter';
import { GetAccountDTO } from '../dtos/get-account-dto';
import { Account } from '@mock-service/core';
import { loopbackFilterMapper } from '../../../types/loopback-filter';

export const getAccountById: InvokeMethod<{ id: string; query?: GetAccountDTO; }, any[]> = async (instance, requestData, options) => {
	let filter: Filter<Account> = {};
	if (requestData.query) {
		filter = loopbackFilterMapper<Account>(requestData.query);
		if (requestData.query.relations?.balances == true) {
			filter.include = [{ relation: 'balances', scope: {} }];
		}
	}
	const response = await instance.get(`/accounts/${requestData.id}`, {
		params: { filter: JSON.stringify(filter) }
	});
	return response.data;
};