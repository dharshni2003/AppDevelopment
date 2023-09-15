import React,{useState} from 'react'
import"./Login.css";
//import{useNavigate}from 'react-router-dom';
export default function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    //const navigate=useNavigate();
    const formHolder=(event)=>
    {
      //navigate("/Register")
    }
   
  return (
  
  <div>
  <div className='img'>
    
   
   
    
    <div className='rectangle'></div>

    <div className='head1'>
      <p>LOGIN</p>
    </div>
    <div className='form1'>
    <form onsubmit={formHolder}>
<input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <br/>
 <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <br/>
    <button type="submit" class="but">SUBMIT</button><br/>
   
    

    
    
    </form>
   
    </div>
  
    </div>
    </div>
    

  
  )
}
 
  

    
    
    

