import React from 'react';
import pe from './1.png';
import du from './2.png';
import te from './3.png';
import ch from './4.png';
import pa from './5.png';
import se from './6.png';
import './pws.css';

const Pws = () => (
    <div>
        <div className='hehe'>
      <h1>Problems We Solve</h1>
      </div>
    <div className='pwws'> 
    
    <div className='container'>
    <div className="serviceBox">
            <div className="icon" >
            <img src={pe} alt="pe" />
            </div>
            <div className="content">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                eos facilis beatae dicta perferendis. Similique.
              </p>
            </div>
          </div>
    <div className="serviceBox">
            <div className="icon">
            <img src={du} alt="du" />
            </div>
            <div className="content">
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                eos facilis beatae dicta perferendis. Similique.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
            <img src={te} />
            </div>
            <div className="content">
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                eos facilis beatae dicta perferendis. Similique.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
            <img src={ch} />
            </div>
            <div className="content">
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                eos facilis beatae dicta perferendis. Similique.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
            <img src={pa} />
            </div>
            <div className="content">
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                eos facilis beatae dicta perferendis. Similique.
              </p>
            </div>
          </div>
          <div className="serviceBox">
            <div className="icon">
            <img src={se} />
            </div>
            <div className="content">
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                eos facilis beatae dicta perferendis. Similique.
              </p>
            </div>
          </div>
      
    </div>
    </div>
    </div>
  );

export default Pws;