import React, { useEffect } from 'react'
import { apiData } from '../../apiData'
import './styles.css'
import error404 from '../../assets/error404.png'
import { useSearchParams } from 'react-router-dom'

const Playlist = ({ video, setVideo, data }) => {
  
  // const [searchParams] = useSearchParams();
  
  // useEffect(() => {
  //   if (searchParams) {
  //     console.log('searchParams>>', searchParams)
  //     setVideo(data[searchParams])
  //     console.log('video', video)
  //   }
  // }, [searchParams]);
  return (
    <div className='playlist-div'>
      {data.map((item, index) => (
        //  <a href={`/videoplayer?${item.id}`}>
        <div key={index} className='item-div'>
            {item.poster ? 
            <img src={item.poster} /> :
            <img src={error404} />
            }
        </div>
        // </a>
      ))}
    </div>
  )
}

export default Playlist
