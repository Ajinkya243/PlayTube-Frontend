import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import classes from './History.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { removeFromHistory, clearHistory } from "../../utils/redux/slice/historySlice";
import {removeFromLikes,clearLikes} from "../../utils/redux/slice/likesSlice"
import {removeFromWatchLater,clearWatchLater} from "../../utils/redux/slice/watchLaterSlice";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const History=({tab})=>{
    const{setCurrentPage}=useGlobalState();
    const {user}=useSelector(state=>state.users);
    const navigate=useNavigate();
    const{history}=useSelector(state=>state.history);
    const{likes}=useSelector(state=>state.likes);
    const{watchLater}=useSelector(state=>state.watchLater);
    const videos=tab==='History'?history:tab==='Like'?likes:watchLater;
    const filterVideos=videos.filter(el=>el.userName===user.userName);
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        if(tab==='History'){
            const filterItems=filterVideos.filter(el=>el.video._id!==id);
        dispatch(removeFromHistory(filterItems));
        toast.success('Video remove from history')
        }
        if(tab==='Like'){
            const filterItems=filterVideos.filter(el=>el.video._id!==id);
        dispatch(removeFromLikes(filterItems));
        toast.success('Video remove from likes')
        }
        if(tab==='watch-later'){
            const filterItems=videos.filter(el=>el.video._id!==id);
            dispatch(removeFromWatchLater(filterItems));
            toast.success('Video remove from watch later list')
        }
        
    }
    const handleData=()=>{
        if(tab==='History'){
            dispatch(clearHistory());
            toast.success('You clear history')
        }
        if(tab==='Like'){
            dispatch(clearLikes());
            toast.success('You clear liked video');
        }
        if(tab==='watch-later'){
            dispatch(clearWatchLater());
            toast.success('You clear watching list')
                }
    }
    const handleExplore=()=>{
        navigate("/")
    }
    useEffect(()=>{
        setCurrentPage(tab);
        if(!user.username){
            navigate("/videos/login")
        }
    },[tab,user])
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className={classes.page}>
        <div className={classes['columns-flex']}>
            {filterVideos.length>0 && <div className={classes.img}>
            <h2>{tab} Page</h2>
            <img src={filterVideos[0]?.video?.thumbnail} alt="" />
            {filterVideos.length>0&&<p>{filterVideos.length} Videos</p>}
            <button onClick={handleData}>Clear</button>
            </div>}
            <div className={classes.list}>
                {filterVideos.length>0 && filterVideos.map(el=>(
                    <div className={classes.video} >
                        <Link to={`/videos/${el.video?._id}`} className={classes['video-link']} state={{el:el.video}} >
                        <div style={{display:'flex',alignItems:'start',gap:'10px'}}>
                        {el.video?.thumbnail && <img src={el.video.thumbnail} alt="image" width={150} height={100} />}
                        <div >
                        <p >{el.video?.title}</p>
                        <p >{el.video?.creatorName}</p>
                        </div>
                        </div>
                        </Link> 
                        <div className={classes.delete}>
                        <FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#ff0000",}} onClick={()=>handleDelete(el.video._id)} />
                        </div>
                    </div>
                ))}
                {filterVideos.length===0 && <div><p>No videos in record!</p> 
                <button className={classes.btn} onClick={handleExplore}>Explore now.</button>
                </div>
                }
            </div>
        </div>
        </div>
        </>
    )
}
export default History;