import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';


//import Sidebar from './Components/Assets/Login/Sidebar';
import Home from './Components/Assets/Login/Home';
import Register from './Components/Assets/Login/Register';
import Login from './Components/Assets/Login/Login';
import Aboutus from './Components/Assets/Login/Aboutus';
import Weathertoday from './Components/Assets/Login/Weathertoday';
import Countries from './Components/Assets/Login/Countries';
import Report from './Components/Assets/Login/Report';


function App({})
{
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/weather" element={<Weathertoday/>}/>
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/report" element={<Report/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;