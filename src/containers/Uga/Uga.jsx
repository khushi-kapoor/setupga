import React from 'react';
import c1 from './c1.png';
import c3 from './c3.png';
import c2 from './c2.png';
import './uga.css';

const Uga = () => (
    <div className='pig'>
    <div className='hea'>
      <h1> Unlock the full potential of <br/> Google Analytics.</h1>
      </div>
    <div className="card-container">
      <div className="card">
      <img src={c1} alt="c1" />
        <h1>Google Analytics 4 <br/> Set up</h1>
        <p>Universal Analytics is being sunset in 2022. Get the benefits of GA4 now, set up the right way.</p>
      </div>
      <div className="card">
      <img src={c2} alt="c2" />
        <h1>Google Tag Manager <br/> Integration</h1>
        <p>Need enhanced analytics for Shopify, Woocommerece? We'll set up enhanced data layers and GTM integration.</p>
      </div>
      <div className="card">
      <img src={c3} alt="c3" />
        <h1>Google/Facebook Ad <br/> Tracking</h1>
        <p>Accurate conversion tracking & remarketing is vital for ad success. We'll ensure it's done right.</p>
      </div>
    </div>
  </div>
);

export default Uga;