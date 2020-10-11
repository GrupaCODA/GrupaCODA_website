import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {

    const ContactFormStyled = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: #FFFFFF;
    border-top: 1px solid;
    border-color: #a5a5a5; 
    
    
    }
`;

    const ContactFormInner = styled.form`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: #1a1a1a;
    text-align: center;
`;

    const InputStyle = styled.input`
width 80%;
font-size: 15px;
height: 20px;
background: transparent;
color: #1a1a1a;
border-color: #1a1a1a;
border-style: 40px solid;
margin: 15px;
`;


    const TextAreaStyle = styled.textarea`
position: relative;
width 80%;
font-size: 15px;
min-height: 100px;
background: transparent;
color: #1a1a1a;
border-color: #1a1a1a;
border-size: 40px solid;
resize: none;
`;

    const SendButtonStyle = styled.button`
margin: 15px;
width 80%;
border-radius: 25px;
background-color: #1a1a1a;
border-color: #1a1a1a;
border-size: 40px solid;
cursor: pointer;
font-size: 15px;
color: #FFFFFF;
text-align: center;
`;

    const TextStyle = styled.p`
color: #000000;
font-weight: light;
font-size: 15px;
margin: 30px
`;


    return (
        <ContactFormStyled className="contact">
            <ContactFormInner className="contact__inner" >
                <InputStyle type="hidden" name="contact__number"/>
                <label>Imię i nazwisko</label>
                <InputStyle type="text" name="user__name"/>
                <label>Email</label>
                <InputStyle type="email" name="user__email"/>
                <label>Temat</label>
                <InputStyle type="subject" name="subject"/>
                <label>Wiadomość</label>
                <TextAreaStyle type="text" name="message"/>
                <SendButtonStyle >Wyślij</SendButtonStyle>
                <TextStyle>
                    Grupa CODA Kamil Rzychoń <br/>
                    Chrobrego 1/1A 41-500 Chorzów
                </TextStyle>
            </ContactFormInner>
        </ContactFormStyled>

    )
}
export default ContactForm;