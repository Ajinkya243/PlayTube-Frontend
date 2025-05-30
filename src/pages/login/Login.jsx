import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setCurrentUser } from '../../utils/redux/slice/usersSlice';
import {ClipLoader} from 'react-spinners';
import { loginUser } from '../../utils/redux/slice/usersSlice';
import {jwtDecode} from 'jwt-decode';

const Login=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const{status}=useSelector(state=>state.users);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const textCredentials={email:'johnWick@test.com',password:'hitman'}

    const handleLogin=async(event)=>{
        event.preventDefault();
        const token=await dispatch(loginUser({email,password}));
        if(token.payload){
            toast.success("Login Succesfully");
            localStorage.setItem('token',token.payload);
            const decode=jwtDecode(token.payload);
            console.log(decode);
            dispatch(setCurrentUser(decode));
            setEmail("");
            setPassword("");
            navigate("/");
        }
        else{
            toast.error("Invalid Credentials");
        }
    }

    const handleGuestLogin=()=>{
        setEmail(textCredentials.email);
        setPassword(textCredentials.password);
    }
   
    return(
        <div className={classes.login}>
            <Navbar/>
            <form>
                <div>
                <label htmlFor="inputEmail">Email:</label><br />
                <input type="email" id="inputEmail" value={email} onChange={event=>setEmail(event.target.value)}/>
                </div>
                <br />
                <div>
                    <label htmlFor="inputPassword">Password:</label><br />
                    <input type="password" id="inputPassword" value={password} onChange={event=>setPassword(event.target.value)}/>
                </div>
                <br />
                <button onClick={handleLogin}>{status === 'pending'? <ClipLoader
  color="white"
  size={20}
/> : "Login"}</button>
            </form>
            <p>New User? <Link to="/videos/signup">Sign Up!</Link></p>
            <button onClick={handleGuestLogin}>Use Guest Credentials</button>
            
        </div>
    )
}
export default Login;