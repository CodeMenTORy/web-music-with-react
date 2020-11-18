import React, { memo } from 'react';
import TopBanner from './children-cpns/top-banner';
import { RecommendWrapper } from './style';

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
  );
}

export default memo(Recommend);
