import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((_, index) => index < 4).map(item => (
          <CollectionItem item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
