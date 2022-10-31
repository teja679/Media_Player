import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom';
import { apiData } from './apiData';
import './App.css';
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/Navbar/Navbar';
import Playlist from './components/Playlist/Playlist';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  var id = 0;
  const data = apiData.map((item) => { return {id: id++, ...item}})
  const [video, setVideo] = useState({})
  // const API_URL = 'https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList/'
  // const [data, setData] = useState();
  // useEffect(() => {
  //     getData();
  // })
  // const getData = async () => {
  //     const res_data = await axios.get(API_URL, {crossDomain: true}).then(res => {
  //       console.log(res)
  //     })
  //     setData({id: id++, ...res_data})
  //     // console.log(data)
  //   }
  // const [video, setVideo] = useState({})
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<CarouselComponent data={data} />} />
      <Route path='/playlist' element={<Playlist video={video} setVideo={setVideo} data={data} />} />
      <Route path='/videoplayer' element={<VideoPlayer video={video}  />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
