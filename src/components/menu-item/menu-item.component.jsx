import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match }) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='sub-title'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
