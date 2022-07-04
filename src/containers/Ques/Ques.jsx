import React from 'react';

import './Ques.css';

const Ques = () => (
    <div className="wrapper">
        <h1>Frequently Asked Questions</h1>
        <div className="lista-item">
          <input className="trigger-input" id="faq-titulo-1" type="checkbox" />
          <div className="trigger-wrapper">
            <label htmlFor="faq-titulo-1">
              <h2 className="faq-titulo">What access should I give to you?</h2>
            </label>
            <p className="faq-conteudo">You should provide us with editor level access to your Google Analytics property for the setup.Also, the excess to your website’s code must be provided to add the necessary custom code for the process.</p>
          </div>
        </div>
        <div className="lista-item">
          <input className="trigger-input" id="faq-titulo-2" type="checkbox" />
          <div className="trigger-wrapper">
            <label htmlFor="faq-titulo-2">
              <h2 className="faq-titulo">How long does the set-up take ?</h2>
            </label>
            <p className="faq-conteudo">The entire set-up may take upto 3-10 business days depending upon the plan selected.</p>
          </div>
        </div>
        <div className="lista-item">
          <input className="trigger-input" id="faq-titulo-3" type="checkbox" />
          <div className="trigger-wrapper">
            <label htmlFor="faq-titulo-3">
              <h2 className="faq-titulo">How do I know which plan is suitable for my website?</h2>
            </label>
            <p className="faq-conteudo">You can the pricing plans or talk to our team of experts who will suggest a plan accoring to your needs and requiremnets.</p>
          </div>
        </div>
        <div className="lista-item">
          <input className="trigger-input" id="faq-titulo-4" type="checkbox" />
          <div className="trigger-wrapper">
            <label htmlFor="faq-titulo-4">
              <h2 className="faq-titulo">How and when should I pay for the service?</h2>
            </label>
            <p className="faq-conteudo">The entire amount for the plan must be paid in advance before we start the service.</p>
          </div>
        </div>
        <div className="lista-item">
          <input className="trigger-input" id="faq-titulo-5" type="checkbox" />
          <div className="trigger-wrapper">
            <label htmlFor="faq-titulo-5">
              <h2 className="faq-titulo">How will will it take to show data in the reports?</h2>
            </label>
            <p className="faq-conteudo">You can see the event data in the realtime report as soon as we setup and add events to your account.The data may take 24-48 hrs to show up in the standard reports.</p>
          </div>
        </div>
        <div className="lista-item">
          <input className="trigger-input" id="faq-titulo-6" type="checkbox" />
          <div className="trigger-wrapper">
            <label htmlFor="faq-titulo-6">
              <h2 className="faq-titulo">What if I want to make changes after some time?</h2>
            </label>
            <p className="faq-conteudo">Once we hand over the access to you, no more changes can be made.But our team will of experts will do a QA and confirm with you before handing the project back.</p>
          </div>
        </div>
      </div>
);

export default Ques;