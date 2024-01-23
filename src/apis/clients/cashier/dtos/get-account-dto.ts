import { Account, Query } from "@mock-service/core";

export class GetAccountDTO implements Query<Account>{
	fields?: (keyof Account)[] | undefined;
	sort?: { [P in keyof Account]?: 'ASC' | 'DESC'; };
	relations?: Record<'balances', boolean | undefined | null>;
	[props: string]: unknown;
}