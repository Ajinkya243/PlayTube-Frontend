import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import classes from './SignupForm.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, setCurrentUser } from "../../utils/redux/slice/usersSlice";
import { toast } from "react-toastify";
const SignupForm=()=>{
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSignup=(event)=>{
        event.preventDefault();
        dispatch(addUser({userName,email,password}));
        toast.success('Signup and login succesfully');
        dispatch(setCurrentUser({userName,email,password}));
        setTimeout(()=>{
            navigate("/");
        },1500)
        
    }
    return(
        <>
        <Navbar/>
        <div className={classes.signup}>
        <form>
            <h2>Signup</h2>
            <div>
                <label htmlFor="inputUser">UserName:</label>
                <input type="text" id="inputUser" value={userName} onChange={event=>setUserName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="inputEmail">Email:</label>
                <input type="email" id="inputEmail" value={email} onChange={event=>setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor="inputPassword">Password:</label>
                <input type="password" id="inputPassword" value={password} onChange={event=>setPassword(event.target.value)}/>
            </div>
            <button onClick={handleSignup}>Signup</button>
        </form>
        
        <p>Already User? <Link to="/videos/login">login</Link></p>
        </div>
        </>
    )
}
export default SignupForm;