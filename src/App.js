import React from 'react';

import { Footer, Accordion, Blog, Possibility, Features, WhatGPT3, Header, Testimonial, Pricing, Beechka, Hiw ,Uga} from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Possibility />
    <Brand />
    <Uga/>
    <Hiw/>
    <Beechka/>
    <Pricing/>
    <Testimonial/>
    <Accordion />
    <Footer />
  </div>
);

export default App;