import React from 'react';
import { observer, inject } from 'mobx-react';
import { reaction } from 'mobx';
import BlockStore from '../../stores/block.store';
import ConfigStore from '../../stores/config.store';
import UiStore from '../../stores/ui.store';
import axios from './axios.service';

interface Props {
  blockStore?: BlockStore;
  configStore?:ConfigStore;
  uiStore?: UiStore
}

const BlockApi = {
  getBlockList: () => axios.get('/blocks'),
};

const BlockService = ({ blockStore, uiStore } : Props) => {
  const getActionCount = data => {
    data.forEach(block => {
      let actionCount = 0;
      block.transactions.forEach(t => {
        try {
          actionCount += t.trx.transaction.actions.length;
        } catch (err) {}
      });
      // eslint-disable-next-line no-param-reassign
      block.actionCount = actionCount;
    });
    return data;
  };
  const getBlockList = async getAction => {
    try {
      uiStore!.setShowLoader(true);
      const response = await BlockApi.getBlockList();
      if (getAction) {
        blockStore!.setBlockList(getActionCount(response.data));
      } else {
        blockStore!.setBlockList(response.data);
      }
      uiStore!.setShowLoader(false);
      uiStore!.setAlert({ type: 'success', title: 'Success', message: uiStore!.message.success.LOADED });
    } catch (err) {
      uiStore!.setAlert({ type: 'error', title: 'Error!', message: err });
      uiStore!.setShowLoader(false);
    }
  };
  reaction(() => blockStore!.apiType, async () => {
    if (blockStore!.apiType.getBlockList && blockStore!.apiType.getAction) await getBlockList(true);
  });
  return null;
};


export default inject('blockStore', 'uiStore')(observer(BlockService));
