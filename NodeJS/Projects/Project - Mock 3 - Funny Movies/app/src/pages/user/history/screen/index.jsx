import React from "react";
import { useSelector } from "react-redux";
import { UserLayout } from "../../../../components/user-layout";
import { VideoList } from "../../../../components/video-list";

export const History = () => {
  const state = useSelector((state) => state?.HomePageReducer);
  const videos = state?.dataResponse.filter((item) => item.id % 2 === 0);
  return (
    <div>
      <UserLayout content={<VideoList videos={videos}/>} />
    </div>
  );
};
