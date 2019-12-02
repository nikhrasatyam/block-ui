import { action, observable } from 'mobx';
import { success, error, warn } from '../messages';
import { Success } from '../types/message.type';

export default class UiStore {
  @observable showLoader = false;

  @observable message :{success:Success, error:object, warn:object}= { success, error, warn };

  @observable alert : {type:string, title:string, message:string}= { type: '', title: '', message: '' };

  @action setShowLoader(value) {
    this.showLoader = value;
  }

  @action setAlert(alert) {
    this.alert = alert;
  }
}
