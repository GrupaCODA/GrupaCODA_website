import React from 'react';
import ServicesList from "../components/ServicesList";

import opticalFiner from './../assets/fiber-optic-cables.jpg'
import Kamera from './../assets/kamera.jfif';
import Domofon from './../assets/domofon.jpg';
import Plans from './../assets/plans.jpg';
import Electrical from './../assets/electric.jpg';

import ContactForm from "../components/ContactForm";
import HeroImageService from "../components/HeroImage-services";


const ServicesArr = [
    {
        id: 0,
        name: 'Monitoring',
        image: Kamera,
        description: 'Kamery są podłączone do sieci więc możesz' +
            ' sprawdzać je w dowolnym czasie i dowolnym miejscu.' +
            ' Czuj się bezpiecznie z monitoringiem, który założymy' +
            ' dla Ciebie z najwyższą jakością.'
    },
    {
        id: 1,
        name: 'Domofony',
        image: Domofon,
        description: 'Jesteś właścicielem kamienicy lub należysz' +
            ' do zarządu wspólnoty? Zaufało nam już wielu' +
            ' właścicieli kamienic w Chorzowie oraz' +
            ' Siemianowicach Śląskich. Dołącz do ich grona już dziś.'
    },
    {
        id: 2,
        name: 'Sieci światłowodowe',
        image: opticalFiner,
        description: 'Jest to dziedzina, w której możemy pochwalić ' +
            'się największym doświadczeniem. Wszyscy nasi klienci' +
            ' zaufali naszej jakości pracy. Ty również możesz' +
            ' nam zaufać i powierzyć nam stworzenie ' +
            'własnej sieci lokalnej już dziś.'
    },
    {
        id: 3,
        name: 'Projektowanie sieci teletechnicznych',
        image: Plans,
        alt: 'Obraz anncapictures z Pixabay ',
        description: 'Jakość wykonania naszych projektów obiera się na estetycznym' +
            ' oraz dokładnym wykończeniu. Jedną z części składowych naszej precysji ' +
            'jest profesjonalne wykonanie projektów pod nasze usługi. Jeśli potrzebujesz' +
            ' dobrze skonstrułowanego projektu wykonawczego to trafiłeś idealnie. ' +
            'Doświadczenie pozwoliło nam dojść do precyzji w tej dziedzinie.'
    },
    {
        id: 4,
        name: 'Instalacje elektryczne i teletechniczne',
        image: Electrical,
        alt: 'Obraz Harry Strauss z Pixabay',
        description: 'Z wielką dokładnością i precyzją wykonujemy okablowanie elektryczne oraz' +
            ' teletechniczne sieci, którą możemy zbudować dla ciebie. Wszystko zgodne ' +
            'ze sztuką budowlaną, oraz spełnienem oczekiwań wszystkich klientów z którymi' +
            ' mieliśmy przyjemność współpracować.'
    },
]


const Services = () => {

    return (
        <div className='Services'>
            <HeroImageService/>
            <ServicesList items={ServicesArr}/>
            <ContactForm/>
        </div>
    )
}
export default Services;