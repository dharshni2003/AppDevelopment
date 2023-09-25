import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Contactus from './Components/Assets/Login/Contactus';
import Sidebar from './Components/Assets/Login/Sidebar';
import Home from './Components/Assets/Login/Home';
import Register from './Components/Assets/Login/Register';
import Login from './Components/Assets/Login/Login';
import Aboutus from './Components/Assets/Login/Aboutus';
import Faq from './Components/Assets/Login/Faq';
import Feedback from './Components/Assets/Login/Feedback';
import Privacy from './Components/Assets/Login/Privacy';
import Terms from './Components/Assets/Login/Terms';
import Weather from './Components/Assets/Login/Weather';







function App({})
{
  return (
    
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/weather" element={<Weather/>}/>
        
        </Routes>
        </BrowserRouter>
        
    </div>
   
  );
}
export default App;