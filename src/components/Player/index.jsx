import React, { useEffect, useState, memo } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style";
import PlayImage from "@/assets/images/cyx.webp";
import { Popup } from "antd-mobile";
import MusicList from "./MusicList";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { getPlayList, deleteSong, deleteAllSong } from "./store/actionCreators";
// 快捷方式 @ = src     工程化 alias

function Play(props) {
  const [visible, setVisible] = useState(false);
  const { playList } = props;
  const { 
    getPlayListDispatch, 
    deleteSongDispatch, 
    deleteAllSongDispatch 
  } = props; 
  const { pathname } = useLocation();
  useEffect(() => {
   
      getPlayListDispatch();
    
  }, []);

  const handleDeleteSong = (song) => {
    deleteSongDispatch(song);
    // console.log(song);
  };
  const handleDeleteAllSong = () => {
    deleteAllSongDispatch();
  };
  return (
    <Wrapper>
      <div className={ classNames("play", {active: pathname == "/search"})}>
        <div className="play_title">
          <img src={PlayImage} />
          <span>孤勇者 - 陈奕迅</span>
        </div>
        <div className="play_next">
          <i className="fa fa-play"></i>
          <i className="fa fa-step-forward"></i>
          <i
            className="fa fa-list-ul"
            onClick={() => {
              setVisible(true);
            }}
          ></i>
          <Popup
            visible={visible}
            onMaskClick={() => {
              setVisible(false);
            }}
          >
            <div
              style={{
                height: "50vh",
                overflowY: "scroll",
                padding: "2rem 1rem",
              }}
            >
              {playList.length != 0 ? (
                <MusicList
                  playList={playList}
                  handleDeleteSong={handleDeleteSong}
                  handleDeleteAllSong={handleDeleteAllSong}
                />
              ) : (
                <span>没有播放列表啦</span>
              )}
            </div>
          </Popup>
        </div>
      </div>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    playList: state.play.playList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPlayListDispatch(data) {
      dispatch(getPlayList(data));
    },
    deleteSongDispatch(data) {
      dispatch(deleteSong(data));
    },
    deleteAllSongDispatch() {
      dispatch(deleteAllSong());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Play));
