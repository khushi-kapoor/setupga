import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Data } from './Data';
import faqq from './faq.svg';


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  
  height: 140vh;
  
  padding:100px;
  margin:100px;
  overflow-x: hidden;
  background: #1D2130;
  border-radius: 24px;
  

  @media (max-width: 768px) {
    height: 200vh;
  }
`;

const Faqq = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  

  

 
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  color: #fff;
  justify-content: flex-end;
  align-items: flex-end;
  
  padding: 30px 0px 30px 100px;
  
  
  
`;

const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  cursor: pointer;
  border: 1px solid #000;
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  h1 {
    padding: 15px;
    font-size: 15px;
    text-align: left;
    font-family: var(--font-family);
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: left;
  border: 1px solid #000;
  margin: 15px;
  border-radius: 10px;

  p {
    font-size: 15px;
    padding: 15px;
    font-family: var(--font-family);
  }
`;

function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="HEADER">
      
      <IconContext.Provider value={{ color: '#000', size: '25px' }}>
        <AccordionSection className="accordion">
          <Faqq>
          <img src={faqq} alt="gpt3_logo"  />
          <Container>
            {Data.map((item, index) => (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            ))}
          </Container>
          </Faqq>
        </AccordionSection>
      </IconContext.Provider>
      
    </div>
  );
}

export default Accordion;
