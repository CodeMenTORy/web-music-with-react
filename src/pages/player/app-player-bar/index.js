import React, { memo, useEffect } from 'react';

import { Slider } from 'antd';

import { Control, Operator, PlaybarWrapper, PlayInfo } from './style';

import { useDispatch } from 'react-redux';
import { getSongDetailAction } from '../store/actionCreator';

export default memo(function AppPlayerBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img
                src="https://p1.music.126.net/mNe3491FsGAjuuPkSH9WLA==/109951163405538210.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">红豆</span>
              <a href="/todo" className="singer-name">
                王菲
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} tooltipVisible={false} />
              <div className="time">
                <span className="now-time">02:20</span>
                <span className="divider">/</span>
                <span className="duration">02:20</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
});
