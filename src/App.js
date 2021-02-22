import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import {
  HeaderComponent
} from './components';

// import pages
import {
  HomePage,
  ShopPage,
  SignInAndSignUpPagePage
} from './pages';

import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUpPagePage}/>
      </Switch>
    </div>
  );
}

export default App;
