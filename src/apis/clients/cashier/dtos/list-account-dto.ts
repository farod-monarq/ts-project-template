import { Account, Query } from "@mock-service/core";

export class ListAccountDTO implements Query<Account>{
	limit?: number;
	offset?: number;
	fields?: (keyof Account)[];
	sort?: { [P in keyof Account]?: 'ASC' | 'DESC'; };
	relations?: Record<'balances', boolean | undefined>;
	[props: string]: unknown;
}
