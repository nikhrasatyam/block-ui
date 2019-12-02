import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlockList from './components/block/block.list';
import NotFound from './NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={BlockList} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default Routes;
