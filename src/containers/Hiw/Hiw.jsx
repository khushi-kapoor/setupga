import React from 'react';
import './hiw.css';

const Hiw = () => (
  
  <div className="timeline">
    <h1>Line of Action</h1>
  <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    
    <div className="timeline__event__content ">
      <div className="timeline__event__title">
        Opt for a package
      </div>
      <div className="timeline__event__description">
        <p>Choose from our handcrafted packages, spaecially curated for you 
based on your requirments.</p>
      </div>
    </div>
  </div>
  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    
    <div className="timeline__event__content">
      <div className="timeline__event__title">
      Select Options & Grant Access
      </div>
      <div className="timeline__event__description">
        <p>Follow our onboarding & grant us access to your analytics and platforms.</p>
      </div>
    </div>
  </div>
  <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
   
    <div className="timeline__event__content">
      <div className="timeline__event__title">
        Setting up Analytics
      </div>
      <div className="timeline__event__description">
        <p>Our developers will get to work set up GA4 and other features included with the plan you choose!</p>
      </div>
    </div>
  </div>
  <div className="timeline__event animated fadeInUp timeline__event--type1">
    
    <div className="timeline__event__content">
      <div className="timeline__event__title">
       Testing and Activation
      </div>
      <div className="timeline__event__description">
        <p>We'll run diagnostics and tests to ensure everything is running smoothly, before making live.</p>
      </div>
    </div>
  </div>
</div>
  
);

export default Hiw;