import { parse } from 'query-string';
import { observable, action } from 'mobx';

export default class RouterStore {
  constructor() {
    this.constructorActions();
  }

    @observable queryParams: {[key: string]: string} = {};

    @action constructorActions() {
      this.queryParams = (parse(window.location.search) as {[key: string]: string});
    }
}
