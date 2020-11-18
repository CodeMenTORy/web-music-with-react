import React, { memo } from 'react';

import HotRecommend from './children-cpns/hot-recommend';
import NewAlbum from './children-cpns/new-album';
import RecommendRanking from './children-cpns/rcmd-ranking';
import TopBanner from './children-cpns/top-banner';
import {
  Content,
  RecommendLeft,
  RecommendRight,
  RecommendWrapper,
} from './style';

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);
