import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Register.css';
import Sidebar from './Sidebar';

export default function Register() {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] =  useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =  useState('');

    const [error,seterror]=useState(false);
  const navigate=useNavigate();
  const formHandler=(event)=>
    {
        event.preventDefault();
        if(firstname.length==0)
    {
      alert("Enter firstname")
    }
    else if(lastname.length===0)
    {
      alert("Enter lastname");
    }
   
    else if(email.length===0)
    {
      alert("Enter email");
    }
    else if(password.length===0)
    {
      alert("Enter password");
    }
    else
    {
      navigate("/home")
    }
      }

  
  return (
    <div>
    <Sidebar/>
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
    <input type="text100" placeholder='FirstName' value={firstname} onChange={ (e)=>setFirstname(e.target.value)} name='firstname' required /><br/><br/>
    <label htmlFor="text201"></label>
    <input type="text201" placeholder='LastName' value={lastname} onChange={ (e)=>setLastname(e.target.value)} name='lastname' required/><br/><br/>
    <label htmlFor="email1"></label>
    <input type="email1" placeholder='Email' value={email} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password' required/><br/><br/>
    <button type='submit' class='button'>Register</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}