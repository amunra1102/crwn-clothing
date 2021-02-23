import React from 'react';

import {
  SignUpComponent,
  SignInComponent
} from '../../components';

import './sign-in-and-sign-up.style.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignInComponent />
    <SignUpComponent/>
  </div>
);

export default SignInAndSignUpPage;
