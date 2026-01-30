import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClockRotateLeft,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
const Sidebar = () => {
  const { currentPage } = useGlobalState();
  return (
    <>
      <div className={classes.sidebar}>
        <Link
          to="/"
          className={`${classes.tags} ${
            currentPage === "All" ? classes.active : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            style={{ color: "#ffffffff" }}
          />
          <p>Home</p>
        </Link>
        <Link
          className={`${classes.tags} ${
            currentPage === "Like" ? classes.active : ""
          }`}
          to="/videos/like"
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="xl"
            style={{ color: "#ffffffff" }}
          />
          <p>Liked Videos</p>
        </Link>
        <Link
          className={`${classes.tags} ${
            currentPage === "History" ? classes.active : ""
          }`}
          to="/videos/history"
        >
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size="xl"
            style={{ color: "#ffffffff" }}
          />
          <p>History</p>
        </Link>

        <Link
          className={`${classes.tags} ${
            currentPage === "watch-later" ? classes.active : ""
          }`}
          to="/videos/watch-later"
        >
          <FontAwesomeIcon
            icon={faClock}
            size="xl"
            style={{ color: "#ffffffff" }}
          />
          <p>Watch Later</p>
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
