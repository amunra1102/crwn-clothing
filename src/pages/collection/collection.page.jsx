import React from 'react';
import { connect } from 'react-redux';

import { CollectionItemComponent } from '../../components';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.style.scss';

const CollectionPage = ({ collection }) => {
  console.log(9999, collection);
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);