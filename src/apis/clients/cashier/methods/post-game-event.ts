import { createHmac } from 'crypto';
import { InvokeMethod } from '../../../types/invoke';
import { GameEvent, GameEventResponse } from '@mock-service/core';
import { PostGameEventDTO } from '../dtos/post-game-event-dto';

function sign(token: string, body: object | string): string {
	const message: string =
		typeof body === 'string' ? body : JSON.stringify(body);
	const signature = createHmac('sha256', token)
		.update(message)
		.digest('hex');
	return signature;
}

export const postGameEvent: InvokeMethod<PostGameEventDTO, GameEventResponse> = async (instance, requestData, options) => {
	const signature = sign(requestData.token, requestData.event);
	return instance.post<GameEvent, GameEventResponse>('/aggregator/play',
		requestData.event,
		{
			headers: {
				'X-Request-Sign': signature,
			}
		}
	);
};