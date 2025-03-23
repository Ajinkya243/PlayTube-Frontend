import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import classes from './History.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { removeFromHistory } from "../../utils/redux/slice/videoSlice";
const History=()=>{
    const{history}=useSelector(state=>state.videos);
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
        const filterItems=history.filter(el=>el._id!==id);
        dispatch(removeFromHistory(filterItems));
    }
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className={classes.page}>
        <div className={classes['columns-flex']}>
            <div className={classes.img}>
            <img src={history[0]?.thumbnail} alt="" />
            {history.length>0&&<p>{history.length} Videos</p>}
            </div>
            <div className={classes.list}>
                {history.length>0 && history.map(el=>(
                    <div className={classes.video} >
                        <Link to={`/videos/${el._id}`} className={classes['video-link']} state={{el}} >
                        <div style={{display:'flex',alignItems:'start',gap:'10px'}}>
                        {el.thumbnail && <img src={el.thumbnail} alt="image" width={150} height={100} />}
                        <div >
                        <p >{el.title}</p>
                        <p >{el.creatorName}</p>
                        </div>
                        </div>
                        </Link> 
                        <div className={classes.delete}>
                        <FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#ff0000",}} onClick={()=>handleDelete(el._id)} />
                        </div>
                    </div>
                ))}
                {history.length===0 && <p>No videos!</p>}
            </div>
        </div>
        </div>
        </>
    )
}
export default History;