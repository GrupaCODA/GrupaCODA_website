import React from 'react';
import ContactForm from "../components/ContactForm";
import styled from 'styled-components';



const Contact = () => {

    const ContactPageStyled = styled.div`

    @media (min-width: 1024px) {
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: -2;
      
    }

    `;


    return (
        <ContactPageStyled className='Contact'>
            <ContactForm/>
        </ContactPageStyled>
        )
}
export default Contact;