import React from 'react';

import { Footer, Accordion, Possibility,Ques, Header, Testimonial, Pricing, Beechka, Hiw ,Uga, Pws,Support, ContactForm } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Possibility />
    
    <Uga/>
   <Support/>
   <Pws/>
    <Hiw/>
    <Beechka/>
    <Pricing/>
    <Testimonial/>
    <Accordion />
    <Ques/>
    <CTA/>
    <ContactForm/>
    <Footer />
  </div>
);

export default App;