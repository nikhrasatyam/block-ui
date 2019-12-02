import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import Enzyme from 'enzyme';
import Loader from './loader';
import UiStore from '../../stores/ui.store';


describe('Loader Test Cases', () => {
  let uiStore;

  beforeEach(() => {
    uiStore = new UiStore();
  });
  afterEach(() => { uiStore = null; });
  test('should render loader when showLoader is falsy', () => {
    const tree = renderer.create(<Provider uiStore={uiStore}><Loader /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render loader when showLoader is truthy', () => {
    uiStore.setShowLoader(true);
    const tree = renderer.create(<Provider uiStore={uiStore}><Loader /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have Icon when showLoader is truthy', () => {
    uiStore.setShowLoader(true);
    const wrapper = Enzyme.mount(<Provider uiStore={uiStore}><Loader /></Provider>);
    expect(wrapper.find('Icon')).toHaveLength(1);
  });
});
