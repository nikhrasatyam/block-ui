import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';


import Footer from './footer';
import ConfigStore from '../../../stores/config.store';


describe('Footer Test Cases', () => {
  let configStore;
  beforeEach(async () => {
    configStore = new ConfigStore();
    configStore.setI18n(text);
  });
  afterEach(() => { configStore = null; });

  test('should match snapshot', () => {
    const tree = renderer.create(<Provider configStore={configStore}><Footer /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
