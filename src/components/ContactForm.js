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
color: #000;
border-color: #000 solid;
border: none;
border-bottom: 3px solid;
margin: 15px;
text-align: center;

&:focus {
  outline: none;
  
  -webkit-appearance: none;
  -webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  -moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
}

@media (min-width: 768px) {


font-size: 25px;
height: 30px;

}
`;


    const TextAreaStyle = styled.textarea`
position: relative;
width 80%;
font-size: 15px;
height: 100px;
background: transparent;
color: #1a1a1a;
border-color: #000 solid;
border-size: 3px solid;
resize: none;

&:focus {
  outline: none;
  
  -webkit-appearance: none;
  -webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  -moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
  box-shadow: 0 10px 20px -4px rgba(26, 26, 26, .8);
}

@media (min-width: 768px) {

font-size: 25px;
height: 200px;
}
`;

    const SendButtonStyle = styled.button`
margin: 15px;
width 80%;
height: 20px;
border-radius: 25px;
background-color: #1a1a1a;
border-color: #1a1a1a;
border-size: 40px solid;
cursor: pointer;
font-size: 15px;
color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;

&:hover, &:focus {
outline: none;
background: #FFFFFF;
color: #1a1a1a;
}

@media (min-width: 768px) {

margin: 20px;
font-size: 25px;
height: 40px;

}
`;

    const TextStyle = styled.p`
color: #000000;
font-weight: light;
font-size: 15px;
margin: 30px;

@media (min-width: 768px) {

font-size: 25px;

}
`;

    const LabelStyled = styled.label`
    
    
    @media (min-width: 768px) {
    
    font-size: 25px;
    
    }
    
    `;


    return (
        <ContactFormStyled className="contact">
            <ContactFormInner className="contact__inner" >
                <InputStyle type="hidden" name="contact__number"/>
                <LabelStyled>Imię i nazwisko</LabelStyled>
                <InputStyle type="text" name="user__name"/>
                <LabelStyled>Email</LabelStyled>
                <InputStyle type="email" name="user__email"/>
                <LabelStyled>Temat</LabelStyled>
                <InputStyle type="subject" name="subject"/>
                <LabelStyled>Wiadomość</LabelStyled>
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