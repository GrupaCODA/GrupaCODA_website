import React from 'react';
import ServicesList from "../components/ServicesList";

import opticalFiner from './../assets/opticalFiber.jpg'
import PPOZ from './../assets/ppoz.jpg';
import Kamera from './../assets/kamera.jfif';
import Domofon from './../assets/domofon.jpg'
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
        name: 'PPOŻ.',
        image: PPOZ,
        description: 'Nie czekaj na niekorzystny rozwój wypadków,' +
            ' zamontuj usługi ochrony przeciwpożarowej PPOŻ ' +
            'już dziś i ciesz się na codzień bezpieczeństwem' +
            ' swojego domu lub biura.'
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