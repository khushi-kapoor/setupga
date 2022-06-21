import React from 'react';
import gpt3Logo from './logo.svg';
import './footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';






const Footer = () => (
  <div className="gpt3__footer section__padding">
   

   
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Product</h4>
        <p>What we do</p>
        <p>Supported platforms</p>
        <p>How it works</p>
        <p>Reviews</p>
        <p>Pricing</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>More</h4>
        <p>Package Options </p>
        <p>FAQ's</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>About</h4>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      
      <p>&copy; Copyright SetupGA</p>
    </div>
    <div className="gpt3__footer-social">
    <div className='each'><FaFacebook /></div>
    <div className='each'><FaTwitter /></div>
    <div className='each'><FaLinkedin /></div>
      </div>
  </div>
);

export default Footer;