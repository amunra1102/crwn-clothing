import React, { useEffect, useState } from 'react';
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
  SignInAndSignUpPagePage
} from './pages';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        }));
      }
    });
  }, []);

  console.log(9999, currentUser);

  return (
    <div>
      <HeaderComponent currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sign-in' component={SignInAndSignUpPagePage}/>
      </Switch>
    </div>
  );
}

export default App;
