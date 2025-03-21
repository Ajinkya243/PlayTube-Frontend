import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube} from "@fortawesome/free-brands-svg-icons"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css'
import Searchbar from "../searchbar/Searchbar";
import MobileSearchbar from "../searchbar/MobileSearchbar";
const Navbar=()=>{
    return(
        <>
        <nav className={classes.navbar}>
        <Link to="/" className={classes.link}><h2 className="classes"><FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#ff0000",}} />PlayTube</h2></Link>
        <div className={classes.search}>
        <Searchbar />
        </div>
        <FontAwesomeIcon icon={faUser} size="xl" style={{color: "#000000",}} />
        </nav>
        <div>
        <MobileSearchbar/>
        </div>
        </>
    )
}

export default Navbar;