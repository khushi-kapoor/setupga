import React from 'react';
import pe from './1.png';
import du from './2.png';
import te from './3.png';
import ch from './4.png';
import pa from './5.png';
import se from './6.png';
import './pws.css';

const Pws = () => (
  <div className='poora' id='pws'>
  <h1>Problems we solve</h1>
  <ul>
    <li>
      <div className='p'>
      
      <div className="icon" > <div className='imm'><img src={pe} /></div></div>
      </div>
      
      <div className="title">GA 4 Migration</div>
      <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
     
    </li>
    <li>
    <div className='q'>
    <div className="icon" > <div className='imm'><img src={du} /></div></div>
      </div>
      <div className="title">Missing Reports</div>
      <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
    </li>
    <li >
    <div className='r'>
    <div className="icon" > <div className='imm'><img src={te} /></div></div>
      </div>
      <div className="title">Inaccurate Data</div>
      <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </li>
    <li>
    <div className='s'>
    <div className="icon" > <div className='imm'><img src={ch} /></div></div>
      </div>
      <div className="title">GDPR Compliance</div>
      <div className="descr">Lorem ipsum dolor sit.</div>
    </li>
    <li>
    <div className='t'>
    <div className="icon" > <div className='imm'><img src={pa} /></div></div>
      </div>
      <div className="title">Conversion Tracking</div>
      <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div>
    </li>
    <li >
    <div className='u'>
      <div className="icon" > <div className='imm'><img src={se} /></div></div>
      </div>
      <div className="title">Pixel Issues</div>
      <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </li>
  </ul>
  
</div>
  );

export default Pws;