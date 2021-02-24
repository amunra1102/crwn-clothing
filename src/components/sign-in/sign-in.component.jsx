import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.style';

const SignIn = () => {
  const [state, setState] = useState({email: '', password: ''});

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={state.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
  );
};

export default SignIn;
