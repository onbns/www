import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Landing from './components/welcome';
import SignupWithEmail from './components/auth/SignupWithEmail';
import stores from './stores';
import './index.scss';

ReactDOM.render(
  <Provider {...stores}>
  <HashRouter hashType="noslash">
    <div>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component= {Landing} />
          <Route path='/signup' component= {SignupWithEmail} />          
          {/* <Route path='/signupVerification' component= {SignupVerification} /> */}
          {/* <Route path='/signin' component= {Signin} /> */}
      </Switch>
    </div>
  </HashRouter>
  </Provider>
  , document.getElementById('root'));
