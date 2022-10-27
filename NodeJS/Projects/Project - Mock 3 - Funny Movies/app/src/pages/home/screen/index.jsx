import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserLayout } from "../../../components/user-layout";
import { VideoList } from "../../../components/video-list/index";
import youtube from "../../../apis/youtobe-v3";

export const Home = () => {
  const state = useSelector((state) => state?.HomePageReducer);
  const videos = state?.dataResponse;

  // const getVideo = async () => {
  //   const response = await youtube.get("/videos?id=BKhX9HZoMg8");
    
  //   console.log(response);
  //   return response;
  // };

  // useEffect(() => {
  //   getVideo().then(value => console.log(value))
  // })

  return (
    <div>
      <UserLayout content={<VideoList videos={videos} />} />
    </div>
  );
};
