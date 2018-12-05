import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import netlifyIdentity from 'netlify-identity-widget';

import Landing from './components/welcome';
import CNLanding from './components/welcome/cn';
import PingNode from './components/pingnode';
import stores from './stores';
import './index.scss';

netlifyIdentity.init();

ReactDOM.render(
  <Provider {...stores}>
  <HashRouter hashType="noslash">
    <div>
      <Switch>
        <Route exact path="/" component= {CNLanding} />
        <Route exact path="/cn" component= {CNLanding} />
        <Route exact path="/pingnode" component= {PingNode} />
      </Switch>
    </div>
  </HashRouter>
  </Provider>
  , document.getElementById('root'));
