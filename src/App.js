import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// firebase
import { auth, createUserProfileDocument } from './firebase/firebase.util';

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

import { setCurrentUser } from './redux/user/user.action';

import './App.css';

function App({fetchSetCurrentUser}) {
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => fetchSetCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        }));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSetCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
