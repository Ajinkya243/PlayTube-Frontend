import { useSelector } from "react-redux"
import classes from './Videos.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
import useDebounce from "../../utils/debounce/useDebounce";
const Videos=()=>{
    const{input}=useGlobalState();
    const searchInput=useDebounce(input);
    const {videos,status}=useSelector(state=>state.videos);
    const[category,setCategory]=useState('All');
    const filterVideos=videos.filter(el=>(category==='All'||el.category===category) && (searchInput==undefined || el.title.toLowerCase().includes(searchInput.trim().toLowerCase())) );
    const handleCategory=(event)=>{
        setCategory(event.target.value)
    }
    return(
        <div className={classes.videos}>
            <div className={classes.btns}>
            <button onClick={handleCategory} value='All' className={category==='All'?classes.active:''}>All</button>
            <button onClick={handleCategory} value="music" className={category==='music'?classes.active:''}>Music</button>
            <button onClick={handleCategory} value="gaming" className={category==='gaming'?classes.active:''}>Gaming</button>
            <button onClick={handleCategory} value="movie" className={category==='movie'?classes.active:''}>Movie</button>
            <button onClick={handleCategory} value="trailer" className={category==='trailer'?classes.active:''}>Trailer</button>
            </div>
            <div className={classes['videos-grid']}>
            {filterVideos.length>0 && filterVideos.map(el=>(
                <Link to={`/videos/${el._id}`} style={{textDecoration:'none',color:'black'}} state={{el}} key={el._id}>
                <div className={classes['grid-item']}>
                    <img  src={el.thumbnail} alt="" className={classes['grid-img']} />
                    <div className={classes.creator}>
                    <img src={el.creatorLogo} alt="" className={classes['creator-img']}/>
                    <div>
                    <p style={{margin:0}}>{el.title}</p>
                    <small>{el.views} views</small>
                    </div>
                    </div>
                </div>
                </Link>
            ))}
            {filterVideos.length===0 && status==='success' && <p>No videos found!</p>}
            </div>
        </div>
    )
}
export default Videos;