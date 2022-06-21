import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className='outer'>
    <div className='posimg'>
    <img src={possibilityImage} alt="gpt3_logo" />
    </div>
    
    <div className="gpt3__possibility-content">
     
     <p>Google Analytics 4 helps you to <h4>Grow Your Business</h4> through intelligent Data Collection and Analysis.  </p>
     <br />
     <p>Google analytics puts you a foot <h4>ahead of your competitors</h4></p>
    
   </div>

    
  </div>
);

export default Possibility;