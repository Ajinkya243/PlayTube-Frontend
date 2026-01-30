import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import classes from './SignupForm.module.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signupUser } from "../../utils/redux/slice/usersSlice";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
const SignupForm=()=>{
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{status}=useSelector(state=>state.users);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSignup=async(event)=>{
        event.preventDefault();
        const response=await dispatch(signupUser({email,userName,password}));
        if(response.payload.status===201){
          toast.success("Register Successfully");
          navigate('/videos/login');
        }
        else{
          toast.error("Something went wrong. try again");
        }
    }

    return(
        <>
        <Navbar/>
        <div className={classes.signup}>
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <div>
                <label htmlFor="inputUser">UserName:</label>
                <input type="text" id="inputUser" required value={userName} onChange={event=>setUserName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="inputEmail">Email:</label>
                <input type="email" id="inputEmail" required value={email} onChange={event=>setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor="inputPassword">Password:</label>
                <input type="password" id="inputPassword" required value={password} onChange={event=>setPassword(event.target.value)}/>
            </div>
            <button >{status === 'pending'? <ClipLoader
              color="white"
              size={20}
            /> : "Signup"}</button>
        </form>
        
        <p>Already User? <Link to="/videos/login">login</Link></p>
        </div>
        </>
    )
}
export default SignupForm;