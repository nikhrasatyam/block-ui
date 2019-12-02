import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import Enzyme from 'enzyme';
import UiStore from '../../stores/ui.store';


import Alert from './alert';

describe('Alert Test Cases', () => {
  let uiStore;
  beforeEach(async () => {
    uiStore = new UiStore();
  });
  afterEach(() => { uiStore = null; });

  test('should render alert component when uiStore.alert.message is empty', () => {
    const tree = renderer.create(<Provider uiStore={uiStore}><Alert /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render alert component when uiStore.alert is defined', () => {
    uiStore.setAlert({ type: 'success', title: 'success', message: 'test' });
    const tree = renderer.create(<Provider uiStore={uiStore}><Alert /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have message component when uiStore.alert.message is defined ', async () => {
    uiStore.setAlert({ type: 'success', title: 'success', message: 'test' });
    expect(uiStore.alert.message).toBe('test');
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore}><Alert /></Provider>);
    expect(wrapper.find('Message')).toHaveLength(1);
  });

  test('should not have message component when uiStore.alert.message is empty ', async () => {
    expect(uiStore.alert.message).toBe('');
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore}><Alert /></Provider>);
    expect(wrapper.find('Message')).toHaveLength(0);
  });
});
