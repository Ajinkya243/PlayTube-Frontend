import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { fetchVideos } from './utils/redux/slice/videoSlice';
import { useDispatch } from 'react-redux';
import Videos from './pages/videos page/Videos';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchVideos());
  },[])
  return(
  <>
  <Navbar/>
  <Sidebar/>
  <Videos/>
  </>
  )
}

export default App;
