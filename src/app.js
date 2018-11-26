import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Landing from './components/landing/jumbotron';
import Header from './components/header';
import stores from './stores';
import './index.scss';

ReactDOM.render(
  <Provider {...stores}>
  <HashRouter hashType="noslash">
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component= {Landing} />
      </Switch>
    </div>
  </HashRouter>
  </Provider>
  , document.getElementById('root'));
