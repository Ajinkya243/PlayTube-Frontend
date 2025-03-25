import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ReactPlayer from 'react-player'
import classes from './SingleVideo.module.css'
import ClipLoader from "react-spinners/ClipLoader"; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment } from "../../utils/redux/slice/commentSlice";
import { addToLikes } from "../../utils/redux/slice/likesSlice";
import { addHistory } from "../../utils/redux/slice/historySlice";
import { addTowatchLater } from "../../utils/redux/slice/watchLaterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faThumbsUp, faCircleUser, faTrash } from "@fortawesome/free-solid-svg-icons";
import {toast} from 'react-toastify'
;
const SingleVideo=()=>{
    const{user}=useSelector(state=>state.users);
    const location=useLocation();
    const video=location.state.el;
    const dispatch=useDispatch();
    const{comments}=useSelector(state=>state.comments);
    const videoData=comments.filter(el=>el?.videoId===video.videoId);
    const[commentData,setComment]=useState("");
    const handleClear=()=>{
        setComment('');
    }
    const handleComment=()=>{
        dispatch(addComment({id:comments.length,videoId:video.videoId,userName:user.userName,text:commentData}));
        setComment('');
    }
    const handleLike=()=>{
        if(user.userName){
            dispatch(addToLikes({userName:user.userName,video}));
        toast.success('You like this video')
        }
        else{
            toast.error('Please login to like this video')
        }
        
    }
    const handleWatchLater=()=>{
        if(user.userName){
            dispatch(addTowatchLater({userName:user.userName,video}));
        toast.success('Video added to watch later');
        }
        else{
            toast.error('Please login to add to watch later')
        }
        
    }
    const handleDeleteComment=(index)=>{
        const filterComments=comments.filter((el,i)=>i!==index);
        dispatch(deleteComment(filterComments))
    }
   useEffect(()=>{
    dispatch(addHistory({userName:user.userName,video})); 
   },[])
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className={classes.player}>
         {video?<div><ReactPlayer 
         url={`https://www.youtube.com/watch?v=${video.videoId}`}
         controls
         width={'100%'}
         height='500px'
         />
         <h2>{video.title}</h2>
         <div className={classes.details}>
            <div className={classes.creator}>
           <img src={video.creatorLogo} alt="" /> 
           <div>
            <h3>{video.creatorName}</h3>
            <p>{video.subscriber} subscribers</p>
           </div>
           </div>
           <div className={classes.btns}>
           <button className={classes.btn} onClick={handleLike}><FontAwesomeIcon icon={faThumbsUp} size="xl" style={{color: "#000000",}} title="I like this"/>{video.likes}</button>
           <button className={classes.btn} onClick={handleWatchLater}><FontAwesomeIcon icon={faClock} size="xl" style={{color: "#000000",}} title="Watch later" /></button>
           
           </div>
         </div>
         <div className={classes.description}>
            <h3>{video.views} views</h3>
            <p>{video.description}</p>
         </div>
         <hr />
         <div>
            <h3>{videoData?.length} Comments:</h3>
            {user.userName ?<input type="text" className={classes.comment} placeholder="Add a comment" onChange={event=>setComment(event.target.value)} value={commentData}/>:<p>Please login to add comments</p>}
            {commentData && <div className={classes.commentbtn}>
                <button className={classes['clear-btn']} onClick={handleClear}>Clear</button>
                <button className={classes['cmt-btn']} onClick={handleComment}>Comment</button>
                </div>}
             {videoData!==undefined &&videoData.map((el,index)=>(
                <div className={classes['comment-data']}>
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{color: "#74C0FC",}} />
                    <div>
                    <p>@{el.userName}</p>
                    <p>{el.text}</p>
                    
                    </div>
                    <div className={classes.trash}>
                    {el.userName===user.userName&&<FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#ff0000",}} onClick={()=>handleDeleteComment(index)}/>}
                    </div>
                </div>
            ))}     
         </div>
         </div>:<ClipLoader/>}
        </div>
        </>
    )
}

export default SingleVideo;