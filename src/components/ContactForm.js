import React, {useRef} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const ContactFormStyled = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;

    background-color: transparent;

    z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: 1024px) {
        margin-top: 100px;
        flex-direction: row-reverse;  
        justify-content: space-around;
        align-items: center;
      }
    
`;

    const ContactFormInner = styled.form`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    
    color: #1a1a1a;
    text-align: center;

      @media (min-width: 1024px) {
        width: 65%;
      }
`;

    const InputStyle = styled.input`
width: 80%;
font-size: 15px;
height: 20px;
background: transparent;
color: #1a1a1a;
border: none;
border-bottom: 3px solid #1a1a1a;
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

@media (min-width: 1024px) {

width: 60%;
font-size: 15px;
height: 30px;    
}
`;


    const TextAreaStyle = styled.textarea`
position: relative;
width: 80%;
font-size: 15px;
height: 100px;
color: #1a1a1a;
border: 3px solid #1a1a1a;
resize: none;
margin-top: 20px;

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

@media (min-width: 1024px) {

width: 60%;
font-size: 15px;
height: 150px;    
}

`;

    const SendButtonStyle = styled.button`
margin: 15px;
width: 80%;
height: 20px;
border-radius: 25px;
background-color: #1a1a1a;
border: 2px solid #1a1a1a;
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

@media (min-width: 1024px) {

width: 20%;
font-size: 15px;
height: 20px;    
}

}
`;

    const TextStyle = styled.p`
      
color: #000000;
font-weight: 700;
font-size: 15px;
      text-align: center;


@media (min-width: 768px) {

font-size: 25px;

}

    @media (min-width: 1024px) {
    
    font-size: 15px;
    
    }
`;

    const LabelStyled = styled.label`
    
    
    @media (min-width: 768px) {
    
    font-size: 25px;
    
    }
    
    @media (min-width: 1024px) {
    
    font-size: 15px;
    
    }
    
    `;
    const AnchorStyle = styled.a`
  color: #000000;
  
      @media (min-width: 1024px) {
    
    font-size: 15px;
    
    }
`

    const FooterStyle = styled.footer`
    margin-bottom: 50px;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

      @media (min-width: 1024px) {
        width: 30%;
      }
`

    let name = useRef(null)
    let email = useRef(null)
    let subject = useRef(null)
    let message = useRef(null)



        const sendEmail = (e) => {
            e.preventDefault()

            const service_id = process.env.REACT_APP_SERVICE_ID;
            const template_id = process.env.REACT_APP_TEMPLATE_ID;
            const user_id = process.env.REACT_APP_USER_ID;


            emailjs.send(service_id,template_id,{
                subject: subject.value,
                name: name.value,
                email: email.value,
                message: message.value,
            },user_id)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });

            name.value = ''
            email.value = ''
            subject.value = ''
            message.value = ''
        }

    return (
        <ContactFormStyled className="contact">
            <ContactFormInner className="contact__inner" onSubmit={sendEmail} >
                <InputStyle type="hidden" name="contact__number"/>
                <LabelStyled>Imię i nazwisko</LabelStyled>
                <InputStyle ref={el => (name = el)} type="text" name="user__name"/>
                <LabelStyled>Email</LabelStyled>
                <InputStyle ref={el => (email = el)} type="email" name="user__email"/>
                <LabelStyled>Temat</LabelStyled>
                <InputStyle ref={el => (subject = el)} type="subject" name="subject"/>
                <LabelStyled>Wiadomość</LabelStyled>
                <TextAreaStyle ref={el => (message = el)} type="text" name="message"/>
                <SendButtonStyle >Wyślij</SendButtonStyle>
            </ContactFormInner>
                <FooterStyle>
                    <div>
                        <TextStyle>
                            Grupa CODA
                        </TextStyle>
                        <TextStyle>
                            Kontakt biuro
                        </TextStyle>
                        <AnchorStyle href="tel: +48-518-781-784">
                            +48 518 781 784
                        </AnchorStyle>
                    </div>
                    <div>
                        <TextStyle>
                            Lokalizacja
                        </TextStyle>
                        <AnchorStyle href="https://goo.gl/maps/PMVvwoWLMDrrE84EA">
                            Chrobrego 1/1A 41-500 Chorzów
                        </AnchorStyle>
                    </div>
                    <div>
                        <TextStyle>
                            NIP
                        </TextStyle>
                        <AnchorStyle>
                            643 176 13 62
                        </AnchorStyle>
                    </div>
                </FooterStyle>

        </ContactFormStyled>

    )
}
export default ContactForm;