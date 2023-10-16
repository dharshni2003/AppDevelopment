import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Sidebar from './Sidebar';
import './Contactus.css';

export default function Contactus() {
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastname]=useState("");
  const[email,setEmail]=useState("");
  const[mobile,setMobile]=useState("");
  const[message,setMessage]=useState("");
  const details={firstname,lastname,email,mobile,message};

  const navigate=useNavigate();
  const formHolder=async(e)=>{
  e.preventDefault();
  if(firstname.length===0 && email.length===0)
  {
    alert("Enter username and emailid")
  }
  else{
  axios.post("http://localhost:8080/auth/postContact",details)
  navigate("/home");}
}
  return (
    <div>
   <Sidebar/>
    <div className='contactfull'>
           <div className='contact'>
           <h1>Contact Us</h1>
           </div>
           <form onSubmit={formHolder}>
           <input type="text" id="firstName" value={firstname} placeholder="First Name" onChange={(e)=>setFirstname(e.target.value)} required="required"/>
           <input type="text" id="lastName" value={lastname} placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)} required="required"/>
           <input type="email" id="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required="required"/>
           <input type="text" id="mobile" value={mobile} placeholder="Mobile Number" onChange={(e)=>setMobile(e.target.value)} required="required"/>
           <h4>Type Your Message Here...</h4>
           <textarea type="text" name="" value={message} onChange={(e)=>setMessage(e.target.value)} required="required"/>
           <input type="submit" value="send" id="contact_button"/>
           </form>
       
    </div>
    <div className="rectangle99">
    <img src="https://www.pngitem.com/pimgs/m/10-109046_call-icon-hd-png-download.png" height="400px" width="400px"/>
    </div>
    </div>
  )
}
