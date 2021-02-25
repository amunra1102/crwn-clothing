import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';

import {
  CollectionsOverviewComponent,
  SpinnerComponent
} from '../../components';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

import { ShopPageContainer } from './shop.style';

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<SpinnerComponent />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewComponent}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
