import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserLayout } from '../../../../components/user-layout'
import { Content } from '../base/content'

export const VideoDetail = () => {
  const params = useParams();
  const state = useSelector((state) => state?.HomePageReducer);
  const video = state?.dataResponse.find((item) => item.id === Number(params.id));

  return (
    <div>
      <UserLayout content={<Content videosRight={state?.dataResponse} videoDetail={video}/>} />
    </div>
  )
}
