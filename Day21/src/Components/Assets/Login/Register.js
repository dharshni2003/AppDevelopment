import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Register.css';
import Sidebar from './Sidebar';
import axios from 'axios';
export default function Register() {
  const[username,setUsername]=useState(''); 
  //const[lastName,setLastName]=useState(''); 
  const[emailid,setEmail]=useState('');
  const[mobileno,setMobileno]=useState('');
  const[password,setPassword]=useState(''); 
    //const[confirmPassword,setConfirmassword]=useState('');
    const navigate=useNavigate();

    const details={username,emailid,password,mobileno}
     
    const formHandler =async(e) =>{
      e.preventDefault();
   
  if(emailid.length===0 && password.length===0 && username.length===0 )
  {
    alert("Enter All the fields")
  }
  else
  {
    await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
      ,password});
    navigate("/")
  }
     
      }

  
  return (
    <div>
    
    <div className='body16'>
    <div className='predict6'>
    
    </div>
    <div className='rectangle26'>
    <div className='head26'>
    <p>Register Now</p>
    </div>
    <div className='form26'>
    <form onSubmit={formHandler}>
    <label htmlFor="text100"></label>
    <input type="text100" placeholder='UserName' value={username} onChange={ (e)=>setUsername(e.target.value)} name='firstname' required /><br/><br/>
    <label htmlFor="text201"></label>
    <input type="email1" placeholder='Email' value={emailid} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="text201" placeholder='MobileNo' value={mobileno} onChange={ (e)=>setMobileno(e.target.value)} name='lastname' required/><br/><br/>
    <label htmlFor="email1"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password' required/><br/><br/>
    <button type='submit' class='button'>Register</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}