import React from 'react'
import * as FaIcons from "react-icons/fa";
import "./Home.css";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/userSlice';

export default function Home() {
  


  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div className="body6">
      <Sidebar />
      <div className="rectangle1234">
        <img src="https://i.pinimg.com/originals/e7/2b/75/e72b75bf01e6c9dd7a5dff335b2eef4a.jpg" height="300px" width="300px" />
      </div>
      <div className="rectangle12345">

        <img src="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=170667a&w=0&k=20&c=f5CihJWupN7Wk9d-tSBvTJvdGqIm4AgOvJyI6eyk8Z8=" height="300px" width="300px" />
      </div>
      <div className="rectangle123456">

        <img src="https://e1.pxfuel.com/desktop-wallpaper/624/360/desktop-wallpaper-summer-season-new-tab-theme-summer-season.jpg" height="300px" width="300px" />
      </div>
      <div className="rectangle29">
        <img src="https://w0.peakpx.com/wallpaper/208/415/HD-wallpaper-tsunami.jpg" height="300px" width="300px" />
      </div>
      <div className="rectangle30">
        <img src="https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg?cs=srgb&dl=pexels-jan-krnc-1043458.jpg&fm=jpg" height="300px" width="300px" />
      </div>
      <div className="rectangle31">
        <img src="https://media.istockphoto.com/id/1040975032/photo/tropical-hurricane-approaching-the-usa-elements-of-this-image-are-furnished-by-nasa.webp?b=1&s=170667a&w=0&k=20&c=q0ic5WHTh0yL-wOyR-3qo00Wqlr0hwUlBrKyi2O_2wI=" height="300px" width="300px" />
      </div>
      <div className="Footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <p><span>WEATHER LIVE!</span></p>


              <div className="footer-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-square-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>

            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                 
                </li>
                <li className="nav-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">Register</Link>
                </li>


                <li className="nav-item">
                  <Link to="/login">Log Out</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h4>Contact Info</h4>
              <p><i class="fa-solid fa-phone-volume"></i> 9944005687</p>
              <p><i class="fa-solid fa-envelope"></i>weather_live@gmail.com</p>
              <p><i class="fa-sharp fa-solid fa-paper-plane"></i>TamilNadu,INDIA</p>
            </div>
            <div>
            
            </div>
          </div>
        </div>
        <div className="Last-footer">
          <p>Design By  Team Weather Live</p>
        </div>
      </div>

    </div>
  )
}
