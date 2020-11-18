import { Map } from 'immutable';

import * as actionTypes from './constants';

// 使用immutable API MAP进行包裹
const defaultState = Map({
  topBanners: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    default:
      return state;
  }
}

export default reducer;