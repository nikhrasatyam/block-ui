import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'semantic-ui-react';
import BlockStore from '../../stores/block.store';
import UiStore from '../../stores/ui.store';
import TableExpandable from '../table/table.expandable';

interface Props {
  blockStore?: BlockStore;
  uiStore?:UiStore;
}
const BlockList = ({ blockStore, uiStore } :Props) => {
  React.useEffect(() => {
    blockStore!.setApiType({ getBlockList: true, getAction: true });
  }, []);

  const columns = [{
    dataField: 'id',
    text: 'Id',
    sort: true,
    headerStyle: (colum, colIndex) => ({ width: '50%', textAlign: 'center' }),
  }, {
    dataField: 'timestamp',
    sort: true,
    text: 'Timestamp',
  }, {
    dataField: 'actionCount',
    sort: true,
    text: 'Actions',
  }];
  const expandRow = {
    renderer: row => (
      <div>
        <pre>{JSON.stringify(row, null, 1) }</pre>
      </div>
    ),
  };
  return (
    <>
      {blockStore!.blockList ? (
        <>
          <Button primary loading={uiStore!.showLoader} disabled={uiStore!.showLoader} onClick={() => blockStore!.setApiType({ getBlockList: true, getAction: true })}>Load</Button>
          <TableExpandable columns={columns} data={blockStore!.blockList} expandRow={expandRow} />
        </>
      ) : null}
    </>
  );
};

export default inject('blockStore', 'uiStore')(observer(BlockList));
