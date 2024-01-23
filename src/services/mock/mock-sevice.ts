import { ServerUnaryCall, sendUnaryData, UntypedHandleCall, ServerWritableStream } from '@grpc/grpc-js';
import { mock } from '../../generated/mock';
import { google } from '../../generated/google/protobuf/any';
import { GameActionItem, GameEvent } from '@mock-service/core';
import { Worker } from 'worker_threads';
import { EnvType } from '../../apis';
import { CashierClientAPI } from '../../apis/clients/cashier';
import { randomUUID } from 'crypto';
import { createAnyMessage } from '../../common/utils';

export interface StreamGameEventsWorkerData {
	game: Omit<GameEvent, 'actions' | 'finished'>;
	count: number;
	template: (Pick<GameActionItem, 'action' | 'amount'>)[];
}

//Mock service does not handle inner parameters. Declare client as global for use une service class
let clientInstance: CashierClientAPI;

export class MockService implements mock.UnimplementedMockServiceService {
	constructor(envType: EnvType) {
		clientInstance = new CashierClientAPI(envType);
	}
	SimulateGameSession(call: ServerUnaryCall<mock.GameSessionMock, mock.Task>, callback: sendUnaryData<mock.Task>): void {
		const task: mock.Task = new mock.Task({
			taskId: randomUUID(),
			taskName: 'SimulateGameSession',
			error: undefined
		});
		const job = async () => {
			const baseEvent = {
				token: '075itbwow34t6e5u',
				event: {
					game_id: randomUUID(),
					currency: call.request.in_game_iso,
					game: call.request.machine_id,
					user_id: call.request.account_id
				}
			};
			const responseList = [];
			for (let index = 0; index < call.request.count; index++) {
				const event = Object.assign({}, baseEvent, {
					actions: call.request.template.map(action => {
						const act: GameActionItem = {
							action: action.action as ('bet' | 'win' | 'rollback'),
							amount: action.amount,
							action_id: randomUUID(),
						};
						return act;
					})
				});
				const response = await clientInstance.postGameEvent(event, {});
				responseList.push(response);
				console.log(response);
			}
			task.result = createAnyMessage(responseList);
			task.status = 'COMPLETED';
			return task;
		};
		job().then(task => {
			callback(null, task);
		}).catch(err => {
			console.log(err);
			task.result = createAnyMessage({});
			task.error = JSON.stringify(err);
			task.status = 'FAILED';
			callback(err, task);
		});
	}
	StreamGameEvents(call: ServerWritableStream<mock.GameSessionMock, mock.GameEventResponse>): void {
		const eventMock = call.request;
		const job = async () => {
			const account = await clientInstance.getAccountById({ id: eventMock.account_id });
			call.end();
		};
		job().then().catch(err => {
			call.end();
		});
	}
	[method: string]: UntypedHandleCall;
}
