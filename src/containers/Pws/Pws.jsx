import React from 'react';
import pe from './1.png';
import du from './2.png';
import te from './3.png';
import ch from './4.png';
import pa from './5.png';
import se from './6.png';
import './pws.css';

const Pws = () => (
  <div className='pig'>
    <div className='hea'>
      <h1> Problems we solve</h1>
      </div>
    <div className="card-container">
      <div className="cardi">
      <img src={pe} alt="c1" />
        <h1>GA4 Migration</h1>
        <p>Universal Analytics is being sunset in 2022. Get the benefits of GA4 now, set up the right way.</p>
      </div>
      <div className="cardi">
      <img src={du} alt="c2" />
        <h1>Missing Reports</h1>
        <p>Sometimes advertisers who have linked their accounts to Analytics are unable to see their campaign reports. </p>
      </div>
      <div className="cardi">
      <img src={te} alt="c3" />
        <h1>Inaccurate Data</h1>
        <p>Spams and Tracking systems can be a lot to take in. Set up GA4 correctly and track upto 95% accurate users and precise data. </p>
      </div>
    </div>
<br/>
    <div className="card-container">
      <div className="cardi">
      <img src={ch} alt="c1" />
        <h1>GDPR Compliance</h1>
        <p>By default, Google Analytics is not GDPR compliant. Protect your users privacyprivacy use GDPR and automate the whole process. </p>
      </div>
      <div className="cardi">
      <img src={pa} alt="c2" />
        <h1>Conversion Tracking</h1>
        <p>Add value to your business by adding goals and events and ensure you are tracking every conversion.</p>
      </div>
      <div className="cardi">
      <img src={se} alt="c3" />
        <h1>Pixel Issues</h1>
        <p>A tracking pixel is a piece of code that, when embedded on your websites and when linked to Analytics, sometimes campaign reports are not available </p>
      </div>
    </div>
  </div>
  
  );

export default Pws;