import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import stores from './stores';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
