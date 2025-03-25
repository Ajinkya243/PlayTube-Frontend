import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { fetchVideos } from './utils/redux/slice/videoSlice';
import { useDispatch } from 'react-redux';
import Videos from './pages/videos page/Videos';
import { useGlobalState } from './utils/context/GlobalStateProvider';
import { fetchVideoData } from './utils/redux/slice/videoDataSlice';

function App() {
  const dispatch=useDispatch();
  const{setCurrentPage}=useGlobalState();
  useEffect(()=>{
    dispatch(fetchVideoData());
    dispatch(fetchVideoData())
    setCurrentPage('All');
  },[dispatch])
  return(
  <>
  <Navbar/>
  <Sidebar/>
  <Videos/>
  </>
  )
}

export default App;
