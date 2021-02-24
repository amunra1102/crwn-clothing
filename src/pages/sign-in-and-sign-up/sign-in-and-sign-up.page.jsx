import React from 'react';

import {
  SignUpComponent,
  SignInComponent
} from '../../components';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.style';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInComponent />
    <SignUpComponent/>
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
