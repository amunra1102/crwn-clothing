import React from 'react';
import { Link } from 'react-router-dom';

// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = () => {
  return (
    <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      <Link className='option' to='/sign-in'>
        SIGN IN
      </Link>
    </div>
  </div>
  );
};

export default Header;
