import React from 'react'
import { apiData } from '../../apiData'
import './styles.css'
import error404 from '../../assets/error404.png'

const Playlist = () => {
    const API_URL = 'https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList'
    const data = apiData.map((item) => {
        if(!item.poster){
            item.poster = error404
        }
        return item
    })
  return (
    <div className='playlist-div'>
      {data.map((item, index) => (

        <div key={index} className='item-div'>
            {/* {item.poster ? 
            <img src={item.poster} alt='poster' /> :
            <img src={error404} alt='poster' />
            } */}
            <img src={item.poster} />
        </div>
      ))}
    </div>
  )
}

export default Playlist
