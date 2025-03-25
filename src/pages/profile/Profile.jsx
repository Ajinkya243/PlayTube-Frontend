import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar"
import classes from './Profile.module.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../utils/redux/slice/usersSlice";
const Profile=()=>{
    const{user}=useSelector(state=>state.users);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(setCurrentUser({}));
    }
    useEffect(()=>{
        if(!user.userName){
            navigate("/videos/login");
        }
    },[user]);
    return(
        <>
        <Navbar/>
        {user.userName&&<div className={classes.profile}>
            <h2>Welcome back {user.userName}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>}
        </>
    )
}
export default Profile;