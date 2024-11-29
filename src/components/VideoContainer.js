import React, { Fragment, useEffect, useState } from "react";
import { YOUTUBE_MOVIES_API } from "../utils/constants";
import VideoCard, { BorderedCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOVIES_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length && <BorderedCard info={videos[0]} />}
      {videos.map((video) => {
        return (
          <Fragment key={video.id}>
            <Link to={`/watch?v=${video.id}`}>
              <VideoCard info={video} />
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};

export default VideoContainer;
