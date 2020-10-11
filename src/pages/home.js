import React from 'react';
import styled from 'styled-components';

import HeroImage from "../components/HeroImage";
import ContactForm from "../components/ContactForm";
import MainInfo from "../components/MainInfo";
import ServicesShort from "../components/ServicesShort";
import PartnersList from "../components/PartnersList";

import MaxInvestLogo from '../assets/maxinvest logo.png';
import NetiaLofo from '../assets/netia logo.png';
import OrangeLogo from '../assets/orange logo.png';
import KauflandLogo from '../assets/Kaufland logo.png';
import KoalaLogo from '../assets/koala logo.jpg';
import ImpresjaLogo from '../assets/impresjanet logo.png';

const Partners = [
    {
        id: 0,
        image: MaxInvestLogo
    },
    {
        id: 1,
        image: NetiaLofo
    },
    {
        id: 2,
        image: OrangeLogo
    },
    {
        id: 3,
        image: KauflandLogo
    },
    {
        id: 4,
        image: KoalaLogo
    },
    {
        id: 5,
        image: ImpresjaLogo
    },
]

const PartnersInnerStyled = styled.div`
          margin-top: 1em;
      justify-items: center;
      margin-bottom: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    `;

const SubjectStyled = styled.h2`
    
    width: 100%;
    font-size: 30px;
    color: #000000;
    text-align: center;
    `;

const Home = () => {


    return (
        <div className='Home'>
        <HeroImage/>
        <MainInfo/>
        <ServicesShort/>
        <SubjectStyled>NASI PARTNERZY</SubjectStyled>
        <PartnersInnerStyled>
            <PartnersList items={Partners}/>
        </PartnersInnerStyled>
        <ContactForm/>
        </div>
    )
}
export default Home;