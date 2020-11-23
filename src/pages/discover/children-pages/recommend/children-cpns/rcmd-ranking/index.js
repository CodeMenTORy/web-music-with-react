import React, { memo, useEffect } from 'react';

import ThemeHeaderRCM from '@/components/theme-header-rcmd';
import TopRanking from '@/components/top-ranking';

import { RankingWrapper } from './style';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionsCreators';

export default memo(function RecommendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
