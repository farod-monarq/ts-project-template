import { GameMachine, Query } from "@mock-service/core";

export class ListMachinesDTO implements Query<GameMachine>{
	limit?: number;
	offset?: number;
	fields?: (keyof GameMachine)[];
	sort?: { [P in keyof GameMachine]?: 'ASC' | 'DESC'; };
	[props: string]: unknown;
}
