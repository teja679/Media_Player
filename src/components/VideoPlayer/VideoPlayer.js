import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = ({}) => {
  return (
    <div className='video-player'>
      <ReactPlayer url="https://www.youtube.com/embed/6ZfuNTqbHE8" className='react-player' />
    </div>
  )
}

export default VideoPlayer
