import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
import Searchbar from "../searchbar/Searchbar";
import MobileSearchbar from "../searchbar/MobileSearchbar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { user } = useSelector((state) => state.users);
  return (
    <div className={classes.main}>
      <nav className={classes.navbar}>
        <Link to="/" className={classes.link}>
          <h2 className="classes">
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              style={{ color: "#ff0000" }}
            />
            PlayTube
          </h2>
        </Link>
        <div className={classes.search}>{isHomePage && <Searchbar />}</div>
        <Link className={classes["user-icon"]} to="/videos/profile">
          <FontAwesomeIcon
            icon={faUser}
            size="xl"
            style={{ color: "#ffffffff" }}
          />
          <span>{user.userName}</span>
        </Link>
      </nav>
      {isHomePage && <MobileSearchbar />}
    </div>
  );
};

export default Navbar;
