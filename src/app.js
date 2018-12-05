import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Landing from './components/welcome';
import PingNode from './components/pingnode';
import stores from './stores';
import './index.scss';

ReactDOM.render(
  <Provider {...stores}>
  <HashRouter hashType="noslash">
    <div>
      <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/pingnode" component= {PingNode} />
      </Switch>
    </div>
  </HashRouter>
  </Provider>
  , document.getElementById('root'));
