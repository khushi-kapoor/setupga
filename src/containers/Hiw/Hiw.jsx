import React from 'react';
import './hiw.css';

const Hiw = () => (

    <div className='hiww'>
    <div className='heading'><h1>How it works?</h1></div>
    
    <div className='boxii'>
    <ul>
      <li>
        <div className="date">Choose a plan</div>
        
        <div className="descr">Choose from our Essentials & Enhanced Packages, 
based on your requirments.</div>
      </li>
      <li>
        <div className="date">Select Options & Grant Access</div>
        
        <div className="descr">Follow our onboarding & grant us access your analytics and platforms.</div>
      </li>
      <li>
        <div className="date">Analytics Set Up</div>
        
        <div className="descr">Our developers will get to work setting up GA4, enhanced analytics 
& e-commerce tracking.</div>
      </li>
      <li>
        <div className="date">Testing & Activation.</div>
        
        <div className="descr">We'll run diagnostics and tests to ensure everything is running smoothly, before making live.</div>
      </li>
    </ul>
    </div>
  </div>

    
  
);

export default Hiw;