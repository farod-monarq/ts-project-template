// src/workers/sample-worker.ts

import { isMainThread, parentPort, workerData } from "worker_threads";
import { CashierClientAPI } from "../apis/clients/cashier";
import { EnvType } from "../apis";
import { GameActionItem, GameEvent } from "@mock-service/core";
import { randomUUID } from "crypto";
import { error } from "console";


// Check if it's the main thread
if (isMainThread) {
	console.error('Error: This script should be run as a worker thread. Exiting.');
	process.exit(-1);
}

if (!parentPort) {
	process.exit(-1);
}

console.log('open client ', workerData.envType);

const client = new CashierClientAPI(workerData.envType as EnvType);

const eventBase = workerData.game as Omit<GameEvent, 'actions' | 'finished'>;
const count = workerData.count as number;
const template = workerData.template as (Pick<GameActionItem, 'action' | 'amount'>)[];
const game_id = eventBase.game_id ?? randomUUID();

async function main() {
	if (!parentPort) {
		throw new Error('Error: Not running in a worker thread. Exiting.');
	}
	for (let index = 0; index < count; index++) {
		for (const partial of template) {
			const event: GameEvent = Object.assign({}, eventBase, {
				game_id,
				actions: [{
					action: partial.action,
					amount: partial.amount,
					action_id: randomUUID(),
				}],
			});
			const response = await client.postGameEvent({ event, token: '' });
			parentPort.postMessage({ event: 'data', data: response });
		}
	}
}

main().then(() => {
	process.exit(0);
}).catch(error => {
	console.log(error);
	process.exit(-1);
});