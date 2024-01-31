import React, { useState, useEffect } from "react";
import Hls from "../hls/hls.js";
const Player = () => {
  useEffect(() => {
    let video = document.getElementById("video");
    let videoSrc =
      "https://streetcatpull.hellobike.com/live/4258783365322591678_0.m3u8";
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }
  }, []);
  return (
    <div>
      <video autoPlay id="my-player" className="video-js" controls></video>
    </div>
  );
};

export default Player;
