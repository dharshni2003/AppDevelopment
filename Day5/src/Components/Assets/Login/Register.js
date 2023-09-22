import React,{useState} from 'react'
import Link from '@mui/material/Link';
import "./Register.css";
import { Navigate} from 'react-router-dom';



export default function Register() {
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[email,setEmail]=useState('');
  const[phoneno,setPhoneno]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const handleHomeButtonClick=()=>{
    Navigate('/home');
  }
  return (
    <div>
     
      <div className='img22'>
       <img src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?cs=srgb&dl=pexels-andre-furtado-1162251.jpg&fm=jpg" height="690px" width="1250px"/>
      </div>
      <div className='rectangle2'></div>
      <div className='head2'>
      <p>REGISTER HERE!!</p></div>
      <div className='form2'>
      

       <input type="text200" value={firstname} placeholder="Firstname.." onChange={(e)=>setFirstname(e.target.value)} /><br/><br/>
       
       <input type="text200" value={lastname} placeholder="Lastname.." onChange={(e)=>setLastname(e.target.value)}/><br/><br/>
       
       <input type="text300" value={email} placeholder="email.." onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
       
       <input type="text300" value={phoneno} placeholder="Phone no.." onChange={(e)=>setPhoneno(e.target.value)}/><br/><br/>
       
      <input type="Password400" value={password} placeholder="Password.."onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

      <input type="Password400"  value={confirmpassword} placeholder="Confirm Password.." onChange={(e)=>setConfirmpassword(e.target.value)}/><br/><br/><br/>
       
      <Link href="/home"><button type="submit" class="but2" onClick={handleHomeButtonClick}>REGISTER</button></Link>
      
      </div>
      </div>
      )
    }
  

    //<div className='head2'>
     // <p>REGISTER HERE!!</p>
      //</div>