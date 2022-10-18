import React, {Fragment, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css'

function  Header() {
  const [active,setActive]=useState(false);
const ContactUs=useNavigate()
    return (
       <header>

      <nav className="navbar">

        <div className="navbar-brand">
          <img src="./assets/images/logo1.png" alt="Educator Logo"/>
          <b>WISIG</b>
        </div>

        <ul className={`navbar-nav  ${active===true?"active":""}`}>

          <li className="nav-item ">
            <a href="/" onClick={()=>setActive(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={()=>setActive(false)}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#category" onClick={()=>setActive(false)}>Formations</a>
          </li>
          {/* <li className="nav-item">
            <a href="#blog" onClick={()=>setActive(false)} >Blog</a>
          </li> */}
          <li className="nav-item">
            <Link to={'/ContactUs'}>Contact Us</Link>
          </li>

        </ul>

        <button 
        onClick={()=>ContactUs('/ContactUs')}
        className="btn btn-primary">
          <p className="btn-text">Join us</p>
          <span className="square"></span>
        </button>

        <button className={`nav-toggle-btn ${active===true?"active":""} `}
        onClick={()=>setActive(!active)}>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

      </nav>

    </header>

    
  )
}


export default Header


