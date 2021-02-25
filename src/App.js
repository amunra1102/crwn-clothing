import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// firebase
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.util';

// import components
import {
  HeaderComponent
} from './components';

// import pages
import {
  HomePage,
  ShopPage,
  CheckoutPage,
  SignInAndSignUpPagePage
} from './pages';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

import './App.css';

function App({checkUserSession, currentUser}) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUpPagePage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
