import React, {useEffect} from 'react';
import styled from 'styled-components';

import HeroImageHome from "../components/HeroImage-home";
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
import {slideUpText} from "../components/animation";

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

const PartnersInnerStyled = styled.section`
          margin-top: 1em;
      justify-items: center;
      margin-bottom: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
      
      @media (min-width: 768px) {
      
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 15px;
      
      }
    `;

const SubjectStyled = styled.h2`
    border-top: 1px solid;
    border-color: #a5a5a5;
    padding: 20px;
    width: 100%;
    font-size: 30px;
    color: #1a1a1a;
    text-align: center;
    
    @media (min-width: 768px) {
    
    font-size: 50px;
    
    }
    @media (min-width: 1024px) {
    
    font-size: 30px;
    
    }
    `;

const Home = () => {

    useEffect(() => {
        const sections = document.querySelectorAll("section")

        slideUpText(sections)
    })


    return (
        <div className='Home'>
        <HeroImageHome/>
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