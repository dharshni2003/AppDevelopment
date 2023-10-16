import React,{useState} from 'react'
import"./Login.css";
import{Link, useNavigate}from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/userSlice';
import Sidebar from './Sidebar';
import axios from 'axios';
export default function Login() {
  
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const details={username,password}
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const authenticate=async(e)=>{
      e.preventDefault();
      try
      {
      if(username.length==0 && username.length==0)
      {
        alert("Enter emailid and password")
      }
      else if(username.length===0)
      {
        alert("Enter Emailid")
      }
      else if(password.length===0)
      {
        alert("Enter Password");
      }
      else if(username && password) {
        dispatch(login(username));
        {/*await axios.post("http://localhost:8080/auth/authenticate",{username,password});*/}
        const response=await axios.post("http://localhost:8080/auth/authenticate",{username,password});
      localStorage.setItem("token", response.data.token)
        navigate("/home");
      }
    }
    catch(error)
    {
      alert("Incorrect Username and Password.");
    }
    }
   
  return (
  
  <div>
  
 
  <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
      <br/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <label>Password</label>
    </div>
    <a href="#">
      <span />
      <span />
      <span />
      <span />
      <button type="submit" class="but" onClick={authenticate}>SUBMIT</button>
    </a>
    <div className='head21'>
    <p> NOT YET REGISTERED?</p>
    </div>
    <div className='head3'>
    <Link to="/register"><p> REGISTER HERE!!</p>
    </Link></div>
  </form>
</div>
    </div>
    
  )
}
 
  

    
    
    

