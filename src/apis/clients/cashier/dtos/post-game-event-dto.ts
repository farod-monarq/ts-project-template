import { GameEvent } from '@mock-service/core';

export type PostGameEventDTO = { token: string, event: GameEvent; };