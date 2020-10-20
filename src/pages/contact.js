import React from 'react';
import ContactForm from "../components/ContactForm";
import styled from 'styled-components';

import OpticalFiber from '../assets/opticalFiber.jpg'

const Contact = () => {

    const ContactPageStyled = styled.div`
    
    @media (min-width: 1024px) {
    
      top: 0;
  left: 0;
  z-index: -2;
  background-image: url(${OpticalFiber});
    width: 100%;
  height: 100vh;

background-repeat: no-repeat; 
background-position: 40% 50%;      
webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover; 
    
      &::before {
    content: '';
    background: rgba(0, 0, 0, .3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    }
}

    `;


    return (
        <ContactPageStyled className='Contact'>
            <ContactForm/>
        </ContactPageStyled>
        )
}
export default Contact;