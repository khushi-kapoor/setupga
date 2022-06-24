import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#testimonial">Reviews</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#features">Contact</a></p>
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
       
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#testimonial">Reviews</a></p>
            <p><a href="#pricing">Pricing</a></p>
            <p><a href="#features">Contact</a></p>
            
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            
          <a href="#pricing"><button type="button">GET STARTED</button></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;