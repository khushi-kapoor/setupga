import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const ContactForm = () => (
  <div>
  <section className="contact_us">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="contact_inner">
            <div className="row">
              <div className="col-md-10">
                <div className="contact_form_inner">
                  <div className="contact_field">
                    <h3>Contatc Us</h3>
                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <form action="https://public.herotofu.com/v1/7325f8b0-f359-11ec-8ed8-456386acdd98" method="post">
                    <div className='bon'>
                    
                    <input type="text" className="form-control form-group" placeholder="Name" /> <br />
                    <input type="text" className="form-control form-group" placeholder="Company Name" /> <br />
                    <input type="text" className="form-control form-group" placeholder="Email" /> <br />
                    <textarea className="form-control form-group" placeholder="Message" defaultValue={""} />
                    <button className="contact_form_submit">Send</button>
                    
                    </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="right_conatct_social_icon d-flex align-items-end">
                  <div className="socil_item_inner d-flex">
                  <div className="gpt3__footer-social">
                    <li><a href="#"><div className='each'><FaFacebook /></div></a></li>
                    <li><a href="#"><div className='each'><FaTwitter /></div></a></li>
                    <li><a href="#"><div className='each'><FaLinkedin /></div></a></li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_info_sec">
              <h4>Contact Info</h4>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-headset" />
                <span>+91 8009 054294</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-envelope-open-text" />
                <span>info@flightmantra.com</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="map_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="map_inner">
            <h4>Find Us on Google Map</h4>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
            <div className="map_bind">
            <iframe src="https://www.google.com/maps/d/embed?mid=1r6vDdBdPn1j8kIdcXsOgTjuo5ts&ehbc=2E312F" width= "100%" height="480"  allowFullScreen aria-hidden="false" tabIndex={0} ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
);

export default ContactForm;