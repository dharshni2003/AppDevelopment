import React,{useState} from 'react'
import"./Login.css";
import{Link, useNavigate}from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/userSlice';

export default function Login() {
  
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const authenticate=(e)=>{
      if(username.length==0||password.length==0)
      {
        alert("Enter all fields")
      }
      if(username && password){
          dispatch(login(username));
          navigate("/")
      }
      else{
        navigate("/home")
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
 
  

    
    
    

