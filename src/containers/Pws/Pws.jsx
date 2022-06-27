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
      <div className="descr">Google has announced that Universal Analytics will stop processing data from July 2023 onwards. Google Analytics 4 will be the only version of Google analytics working in the future</div>
     
    </li>
    <li>
    <div className='q'>
    <div className="icon" > <div className='imm'><img src={du} /></div></div>
      </div>
      <div className="title">Missing Reports</div>
      <div className="descr">Sometimes advertisers who have linked their accounts to Analytics cannot see their campaign reports. Resolve this issue with us.</div>
    </li>
    <li >
    <div className='r'>
    <div className="icon" > <div className='imm'><img src={te} /></div></div>
      </div>
      <div className="title">Inaccurate Data</div>
      <div className="descr">
Spams and Tracking systems can be a lot to take in. Set up GA4 correctly and track up to 95% accurate users and precise data. 
</div>
    </li>
    <li>
    <div className='s'>
    <div className="icon" > <div className='imm'><img src={ch} /></div></div>
      </div>
      <div className="title">GDPR Compliance</div>
      <div className="descr">
By default, Google Analytics is not GDPR compliant. Protect your user's privacy using GDPR and automate the whole process. 
</div>
    </li>
    <li>
    <div className='t'>
    <div className="icon" > <div className='imm'><img src={pa} /></div></div>
      </div>
      <div className="title">Conversion Tracking</div>
      <div className="descr">
Add value to your business by adding goals and events and ensure you are tracking every conversion that is important
</div>
    </li>
    <li >
    <div className='u'>
      <div className="icon" > <div className='imm'><img src={se} /></div></div>
      </div>
      <div className="title">Pixel Issues</div>
      <div className="descr">A tracking pixel is a piece of code that, when embedded on your website Sometimes advertisers who have linked their accounts to Analytics are unable to see their campaign reports. 
</div>
    </li>
  </ul>
  
</div>
  );

export default Pws;