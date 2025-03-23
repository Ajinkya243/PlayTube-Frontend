import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ReactPlayer from 'react-player'
import classes from './SingleVideo.module.css'
import ClipLoader from "react-spinners/ClipLoader"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../utils/redux/slice/videoSlice";
const SingleVideo=()=>{
    const location=useLocation();
    const video=location.state.el;
    const dispatch=useDispatch();
    const{history}=useSelector(state=>state.videos);
   useEffect(()=>{
    dispatch(addToHistory(video))
   },[])
   console.log(history)
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className={classes.player}>
         {video?<ReactPlayer 
         url={`https://www.youtube.com/watch?v=${video.videoId}`}
         controls
         width={'90%'}
         height='500px'
         />:<ClipLoader/>}
        </div>
        </>
    )
}

export default SingleVideo;