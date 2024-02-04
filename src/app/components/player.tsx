import React, { useState, useEffect, useRef } from "react";
import Hls from "hls.js";

const Player = (props: { id: string }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current as unknown as HTMLMediaElement;
    let videoSrc =
      "https://streetcatpull.hellobike.com/live/" + props.id + "_0.m3u8";
    if (Hls.isSupported()) {
      console.log("HUH");
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        video.muted = true;
        video.play();
      });
    }
  }, [props.id]);
  return (
    <div>
      <video
        autoPlay
        ref={videoRef}
        id="video"
        className="video-js"
        controls
      ></video>
      <p>{props.id}</p>
    </div>
  );
};

export default Player;
