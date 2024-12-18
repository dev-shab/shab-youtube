import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-96 shadow-lg cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>Views - {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const BorderedCard = ({ info }) => {
  return (
    <div className="border border-black-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
