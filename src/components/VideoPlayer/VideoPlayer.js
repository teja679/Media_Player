import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { apiData } from '../../apiData'

const VideoPlayer = ({ video }) => {
  console.log(video)
  return (
    <div className='video-player'>
      <ReactPlayer url={video.trailer} className='react-player' />
    </div>
  )
}

export default VideoPlayer
