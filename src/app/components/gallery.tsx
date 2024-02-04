import React, { useState, useEffect, useRef } from "react";
import streamList from "./data";
import Player from "./player";
import ListTab from "./tab";
const Gallery = ({}) => {
  const [streamId, setStreamId] = useState("4258783365322591678");
  return (
    <div className="columns-2 gap-0">
      <ul
        role="list"
        className="divide-y divide-slate-200 p-2 rounded-md bg-white"
      >
        {streamList.map((item) => (
          <ListTab key={item.id} clickEvent={setStreamId}>
            {item}
          </ListTab>
        ))}
      </ul>
      <Player id={streamId}></Player>
    </div>
  );
};

export default Gallery;
