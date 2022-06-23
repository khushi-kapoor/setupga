import React from 'react';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';

import './support.css';

const Support= () => (
  <div className="he">
    
    <div className="sup">
        <h2 className='gradient__text'>Supported platforms</h2>
      <h1 className="hh">We can integrate <br/>across most popular <br/>platforms.</h1>
      <p>Unlock the full potential of Google Analytics by passing enhanced, accurate & reliable data, using the latest version GA4, fixing known problems.</p>
     

      
    </div>

    <div className="bka">
    <div className="con">
        <div className="list">

          <div className="list-item">
            <div className="image-box">
              <img src={one} alt="avatar" />
            </div>
            <div className="content">
              
              <h4>Wordpress</h4>
              <p>Get advanced Google Analytics tracking features for Wordpress with custom event set up.</p>
            </div>
          </div>
          <div className="list-item">
            <div className="image-box">
            <img src={two} alt="avatar" />
            </div>
            <div className="content">
              
              <h4>Shopify</h4>
              <p>Track advanced e-commerce events with Shopify in Google Analytics 4, with accurate conversion tracking & remarketing.</p>
            </div>
          </div>
          <div className="list-item">
            <div className="image-box">
            <img src={three} alt="avatar" />
            </div>
            <div className="content">
             
              <h4>Woocommerce</h4>
              <p>Track advanced e-commerce events with Woo-commerce in Google Analytics 4, with accurate conversion tracking & remarketing.</p>
            </div>
          </div>
          <div className="list-item">
            <div className="image-box">
            <img src={four} alt="avatar" />
            </div>
            <div className="content">
              
              <h4>Webflow</h4>
              <p>Track Webflow events in Google Analytics 4, with accurate form submission events.</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>

    
  </div>
);

export default Support;