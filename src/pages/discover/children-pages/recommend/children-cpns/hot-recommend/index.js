import React, { memo, useEffect } from 'react';
import { HotRecommendWrapper } from './style';

import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

import ThemeHeaderRCM from '@/components/theme-header-rcmd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHotRecommendAction } from '../../store/actionsCreators';
import SongsCover from '@/components/songs-cover';

export default memo(function HotRecommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
