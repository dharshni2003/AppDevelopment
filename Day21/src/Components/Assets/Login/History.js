import React, { useEffect, useState } from 'react' 
import { useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./History.css";
import Sidebar from './Sidebar';

const History=()=> { 
const [weathers, setweathers] = useState([]) 
const username=localStorage.getItem('username');
const {id} =useParams();
const navigate=useNavigate();
useEffect(() => 
{ 
getAllWeather(); 
}, []) 



const getAllWeather = () => {
   fetch(`http://localhost:8080/auth/history?username=${username}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => {
       if (data && Array.isArray(data)) {
         setweathers(data);
       } else {
         console.error("Invalid or empty JSON data received.");
       }
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 };
 
 


return ( 
   <div className="fulltable">
   <Sidebar/>
   <div className='rectangle78'>
   <p id='order'>Weather Details</p>
   
   </div>
      <br/>
      <br/>
     <table id='gettable'> 
     <thead>
     <tr> 
        
        <th>Location</th> 
        <th>Humidity</th> 
        <th>Temperature</th> 
        <th>Wind</th> 
       
    </tr> 
    </thead>
   <tbody>
       {weathers.map((weather)=>(
          <tr key={weather.id}> 
       
       <td> {weather.city}</td> 
       <td> {weather.humidity}</td> 
       <td> {weather.temp}</td> 
       <td> {weather.wind}</td> 
       
      
    </tr> 
       ))}
       </tbody>
   </table> 
</div> 
)
} 
export default History;