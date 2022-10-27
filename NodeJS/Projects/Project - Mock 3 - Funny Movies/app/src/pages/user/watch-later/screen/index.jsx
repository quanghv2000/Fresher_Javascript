import React from 'react'
import { UserLayout } from '../../../../components/user-layout'
import { VideoList } from '../../../../components/video-list'
import { useSelector } from "react-redux";

export const WatchLater = () => {
  const state = useSelector((state) => state?.HomePageReducer);
  const videos = state?.dataResponse.filter((item) => item.id > 3 && item.id <= 8);
  return (
    <div>
      <UserLayout content={<VideoList videos={videos}/>} />
    </div>
  )
}
