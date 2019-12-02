import { observable } from 'mobx';
import config from '../config';


export default class ConfigStore {
  @observable config: { [key: string]: any } = config;
}
