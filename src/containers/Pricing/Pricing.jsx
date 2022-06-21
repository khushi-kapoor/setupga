import React from 'react';
import './pricing.css';
import gg from './1.svg';
import bl from './2.svg';
import ye from './3.svg';
import or from './4.svg';


const Pricing = () => (
  
    <section className="pricing-section">
        <div className="container">
          <div className="sec-title text-center">
            <span className="title">Get plan</span>
            <h2>Analytics for every plan</h2>
          </div>
          <div className="outer-box">
            <div className="row">
              {/* Pricing Block */}
              <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-outer"> <img src={gg} alt="gg" /></div>
                  </div>
                  <div className="price-box">
                    <div className="title"> Basic </div>
                    <h4 className="price">$249</h4>
                  </div>
                  <ul className="features">
                    <li className="true">Enhancement Measurement Events</li>
                    <li className="true">Google Ads Integration</li>
                    <li className="true">3 Custom Reports</li>
                    <li className="true">3 Events</li>
                    <li className="true">3 Audiences</li>
                    <li className="false">Conversions</li>
                    <li className="false">Dashboards</li>
                    <li className="false"> Displayer Events</li>
                    <li className="false">Revenue Tracking</li>
                    <li className="false">Data Studio Integration</li>
                  </ul>
                  
                  <div className="btn-box">
                    <a href="" className="theme-btn">Buy Plan</a>
                  </div>
                </div>
              </div>
              {/* Pricing Block */}
              <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-outer"><img src={bl} alt="bl" /></div>
                  </div>
                  <div className="price-box">
                    <div className="title">Advanced</div>
                    <h4 className="price">$499</h4>
                  </div>
                  <ul className="features">
                  <li className="true">Enhancement Measurement Events</li>
                    <li className="true">Google Ads Integration</li>
                    <li className="true">5 Custom Reports</li>
                    <li className="true">5 Events</li>
                    <li className="true">5 Audiences</li>
                    <li className="true">3 Conversions</li>
                    <li className="true">2 Dashboards</li>
                    <li className="false"> Displayer Events</li>
                    <li className="false">Revenue Tracking</li>
                    <li className="false">Data Studio Integration</li>
                  </ul>
                  <div className="btn-box">
                    <a href="" className="theme-btn">Buy Plan</a>
                  </div>
                </div>
              </div>
              {/* Pricing Block */}
              <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-outer"><img src={ye} alt="ye" /></div>
                  </div>
                  <div className="price-box">
                    <div className="title">Enhanced <br /> Ecommerce</div>
                    <h4 className="price">$999</h4>
                  </div>
                  <ul className="features">
                  <li className="true">Enhancement Measurement Events</li>
                    <li className="true">Google Ads Integration</li>
                    <li className="true">10 Custom Reports</li>
                    <li className="true">10 Events</li>
                    <li className="true">5 Audiences</li>
                    <li className="true">5 Conversions</li>
                    <li className="true">5 Dashboards</li>
                    <li className="true">Displayer Events</li>
                    <li className="true">Revenue Tracking</li>
                  </ul>
                  <div className="btn-box">
                    <a href="" className="theme-btn">Buy Plan</a>
                  </div>
                </div>
              </div>
              <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-outer"><img src={or} alt="or" /></div>
                  </div>
                  <div className="price-box">
                    <div className="title"> Enterprise </div>
                    <h4 className="price">$1999</h4>
                  </div>
                  <ul className="features">
                  <li className="true">Enhancement Measurement Events</li>
                    <li className="true">Google Ads Integration</li>
                    <li className="true">15 Custom Reports</li>
                    <li className="true">20 Events</li>
                    <li className="true">10 Audiences</li>
                    <li className="true">5 Conversions</li>
                    <li className="true">5 Dashboards</li>
                    <li className="true"> Displayer Events</li>
                    <li className="true">Revenue Tracking</li>
                    <li className="true">Data Studio Integration</li>
                  </ul>
                  <div className="btn-box">
                    <a href="" className="theme-btn">Buy Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
  
);

export default Pricing;