import {
  action,
  observable,
  configure,
} from 'mobx';

// don't allow state modifications outside actions
configure({ enforceActions: 'observed' });

export default class BlockStore {
  constructor() {
  }

  @observable apiType;

  @observable blockList;

  @action setApiType(type) {
    this.apiType = type;
  }

  @action setBlockList(data) {
    this.blockList = data;
  }
}
