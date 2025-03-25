import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import classes from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { setCurrentUser } from '../../utils/redux/slice/usersSlice';
const Login=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const trialUser={email,password,userName:'John_Wick'}
    const{users}=useSelector(state=>state.users);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogin=(event)=>{
        event.preventDefault();
        const existUser=users.find(el=>el.email===email && el.password===password);
        if(existUser){
            dispatch(setCurrentUser(existUser));
            toast.success('login succesfully');
            setTimeout(()=>{
                navigate("/");
            },1500)   
        }
        else if(trialUser.email){
            dispatch(setCurrentUser(trialUser));
            toast.success('login succesfully');
            setTimeout(()=>{
                navigate("/");
            },1500)  
        }
        else{
            toast.error('Invalid credentials')
        }
    }
    const handleGuestLogin=()=>{
        setEmail('john@gmail.com');
        setPassword('wick007');
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
                <button onClick={handleLogin}>Login</button>
            </form>
            <p>New User? <Link to="/videos/signup">Sign Up!</Link></p>
            <button onClick={handleGuestLogin}>Use Guest Credentials</button>
        </div>
    )
}
export default Login;