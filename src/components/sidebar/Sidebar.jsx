import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClockRotateLeft, faClock, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import classes from './Sidebar.module.css';
import { Link } from "react-router-dom";
const Sidebar=()=>{
    return(
        <>
        <div className={classes.sidebar}>
        
        <Link to="/" className={classes.tags}>
       
        <FontAwesomeIcon icon={faHouse} size="xl" style={{color: "#000000",}} />
        <p>Home</p>
        </Link>
        <Link className={classes.tags}>
        <FontAwesomeIcon icon={faClockRotateLeft} size="xl" style={{color: "#000000",}} />
        <p>History</p>
        </Link>
        
        <Link className={classes.tags}>
        <FontAwesomeIcon icon={faClock} size="xl" style={{color: "#000000",}} />
        <p>Watch Later</p>
        </Link>
        <Link className={classes.tags}>
        <FontAwesomeIcon icon={faThumbsUp} size="xl" style={{color: "#000000",}} />
        <p>Liked Videos</p>
        </Link>
        </div>
        </>
    )
}
export default Sidebar;