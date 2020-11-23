import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

// 获取轮播图数据
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
// 获取热门推荐数据
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});

// 获取新歌推荐
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

const changeUpRanking = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

const changeNewRanking = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRanking = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

// 获取榜单数据
export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeUpRanking(res));
          break;
        case 2:
          dispatch(changeNewRanking(res));
          break;
        case 3:
          dispatch(changeOriginRanking(res));
          break;
        default:
          return;
      }
    });
  };
};
