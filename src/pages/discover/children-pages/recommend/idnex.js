import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionsCreators';

function Recommend(props) {
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners,
  }),shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>Recommend: {topBanners.length}</h2>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

export default memo(Recommend);
