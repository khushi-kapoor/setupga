import React from 'react';
import beechka from './beechka.png';
import './beechka.css';

const Beechka = () => (
  <div className="gpt3__header section__padding" id="pricing">
    <div className="bka">
      <img src={beechka} />
    </div>
    <div className="bbb">
      <h1 className="gradient__text">Accurate Google <br/>Analytics to  drive the <br/> right decisions.</h1>
      <p>Make decisions based on accurate data. Our clients see improved data analytic results, guaranteed.</p>
      <div className="gpt3__header-content__input">
        
        <button type="button">See Pricing</button>
      </div>

      
    </div>

    
  </div>
);

export default Beechka;