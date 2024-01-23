import { FilterBuilder, Order, Fields, Filter } from '@loopback/filter';
import { Query } from '@mock-service/core';

export function loopbackFilterMapper<T extends object>(query: Query<T>): Filter<T> {
	const builder = new FilterBuilder<T>();
	if (query.sort) {
		builder.order(query.sort as Order<T>);
	}
	if (query.fields) {
		builder.fields(query.fields as Extract<keyof T, string>[]);
	}

	if (query.limit) { builder.limit(query.limit); }
	if (query.offset) { builder.limit(query.offset); }

	return builder.build();
}