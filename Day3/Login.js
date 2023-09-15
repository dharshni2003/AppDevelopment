import React,{useState} from 'react'
import"./Login.css";
import{Link, useNavigate}from 'react-router-dom';
export default function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    const authenticate=(e)=>{
      if(email.length==0||password.length==0)
      {
        alert("Enter all fields")
      }
      else{
        navigate("/home")
      }
    }
   
  return (
  
  <div>
  <div className='img'>
    
   
   
    
    <div className='rectangle'></div>

    <div className='head1'>
      <p>LOGIN</p>
    </div>
    <div className='form1'>
    <form>
<input type="text100" value={email} placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/><br/>
    <br/>
 <input type="Password300" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    <br/>
    <button type="submit" class="but" onClick={authenticate}>SUBMIT</button><br/>
   
    <div className='head21'>
    <p> NOT YET REGISTERED?</p>
    </div>
    <div className='head3'>
    <Link to="/signup"><p> REGISTER HERE!!</p></Link></div>

    
    
    </form>
   
    </div>
  
    </div>
    </div>
    

  
  )
}
 
  

    
    
    

