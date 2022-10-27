import React from 'react'
import { UserLayout } from '../../../../components/user-layout'
import { VideoList } from '../../../../components/video-list'
import { useSelector } from "react-redux";

export const YourVideo = () => {
  const state = useSelector((state) => state?.HomePageReducer);
  const videos = state?.dataResponse.filter((item) => item.id > 9);
  return (
    <div>
      <UserLayout content={<VideoList videos={videos}/>} />
    </div>
  )
}
