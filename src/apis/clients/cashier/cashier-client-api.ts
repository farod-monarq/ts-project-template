import { InvokeOptions } from '../../types/invoke';
import * as cashierMethods from './methods';
import { GetAccountDTO, ListAccountDTO, ListMachinesDTO } from './dtos';
import { ClientAPI } from '../../types/client';
import { EnvType } from '../../../common/types';
import { Options } from '../../types';
import path from 'path';
import { GameEvent } from '@mock-service/core';
import { PostGameEventDTO } from './dtos/post-game-event-dto';

export class CashierClientAPI extends ClientAPI {
  getEnvOptions(envType: EnvType): Options {
    const environmentPath = path.join(__dirname, './environments', `environment.${envType}`);
    const { default: options }: { default: Options; } = require(environmentPath);
    return options;
  }

  public async fetchAccount(listAccountDto: ListAccountDTO, options?: InvokeOptions): Promise<any[]> {
    return this.invoke(cashierMethods.fetchAccount, listAccountDto, options);
  }

  public async getAccountById(query: { id: string, query?: GetAccountDTO; }, options?: InvokeOptions) {
    return this.invoke(cashierMethods.getAccountById, query, options);
  }

  public async fetchMachines(query: ListMachinesDTO, options?: InvokeOptions) {
    return this.invoke(cashierMethods.fetchMachines, query, options);
  }

  public async getMachineById(query: { id: string, query?: undefined; }, options?: InvokeOptions) {
    return this.invoke(cashierMethods.getMachineById, query, options);
  }

  public async postGameEvent(query: PostGameEventDTO, options?: InvokeOptions) {
    return this.invoke(cashierMethods.postGameEvent, query, options);
  }

}