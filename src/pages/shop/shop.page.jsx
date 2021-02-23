import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverviewComponent } from '../../components';
import CollectionPage from '../collection/collection.page';

const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
