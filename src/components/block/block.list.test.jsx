import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import Enzyme from 'enzyme';
import UiStore from '../../stores/ui.store';
import BlockStore from '../../stores/block.store';
import blockListMock from '../../mocks/blockList.mock';

import BlockList from './block.list';

describe('BlockList Test Cases', () => {
  let uiStore;
  let blockStore;
  beforeEach(async () => {
    uiStore = new UiStore();
    blockStore = new BlockStore();
  });
  afterEach(() => { uiStore = null; blockStore = null; });

  test('should render BlockList when list is empty', () => {
    const tree = renderer.create(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render BlockList when list has data', () => {
    blockStore.setBlockList(blockListMock);
    const tree = renderer.create(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display table and button when list is not empty', async () => {
    blockStore.setBlockList(blockListMock);
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>);
    expect(wrapper.find('Button')).toHaveLength(1);
    expect(wrapper.find('TableExpandable')).toHaveLength(1);
  });

  test('should not display table and button when list is empty', async () => {
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>);
    expect(wrapper.find('Button')).toHaveLength(0);
    expect(wrapper.find('TableExpandable')).toHaveLength(0);
  });

  test('should  display table and button when list is not empty', async () => {
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>);
    expect(wrapper.find('Button')).toHaveLength(0);
    expect(wrapper.find('TableExpandable')).toHaveLength(0);
  });

  test('should set the loading button disabled when showLoader is truthy', async () => {
    blockStore.setBlockList(blockListMock);
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>);
    let button = wrapper.find('Button');
    expect(button).toHaveLength(1);
    expect(button.props().disabled).toBeFalsy();
    uiStore.setShowLoader(true);
    wrapper.update();
    button = wrapper.find('Button');
    expect(button.props().disabled).toBeTruthy();
  });

  test('should update the blockStore when loading button is clicked', async () => {
    blockStore.setBlockList(blockListMock);
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore} blockStore={blockStore}><BlockList /></Provider>);
    const button = wrapper.find('Button');
    expect(button).toHaveLength(1);
    expect(button.props().disabled).toBeFalsy();
    button.simulate('click');
    expect(blockStore.apiType.getBlockList).toBeTruthy();
    expect(blockStore.apiType.getAction).toBeTruthy();
  });
});
