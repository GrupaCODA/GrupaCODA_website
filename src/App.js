import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import styled from "styled-components";

import Home from './pages/home';
import Contact from "./pages/contact";
import Services from "./pages/services";
import PageNotFind from "./pages/404";

import ScrollToTop from "./components/ScrollToTop";
import Hamburder from "./components/Hamburger";
import LogoWhite from "./assets/Coda Group_Logotyp-05.png";
import LogoBlack from "./assets/Coda Group_Logotyp-06.png";
import {ChangeBackgroundColor} from "./components/animation";


const App = () => {

    const NavStyled = styled.nav`
    
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 999;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    
    @media (min-width: 1024px) {
    
    height: 10%;
    background: transparent;
    
    }
    `;

    const LogoStyled = styled.img`
width: 80%;
height: auto;
opacity: 1;
z-index: 1;

@media (min-width: 768px) {

width: 50%;

}

@media (min-width: 1024px) {

width: 40%;

}
`;

    const StyledLink = styled(Link)`
text-decoration: none;
opacity: 0;
color: #fff;

@media(min-width: 1024px) {

width: 70%; 
opacity: 1;
color: #9c9c9c;
font-size: 30px;
text-transform: uppercase;
font-weight: 600;

}
    
`;


let navBar = useRef(null);
const [isChange, setIsChange] = useState(false);
    useEffect(() => {

        const sections = document.querySelectorAll('section')
        //const helper = window.scrollY + document.getElementById('hero').getBoundingClientRect().top 
        const helper = 120;

        ChangeBackgroundColor(navBar, sections);

        window.addEventListener('scroll', () => {
            let LazyStarter = window.scrollY + 100;
                if(LazyStarter >= helper) {
                    setIsChange(true);
                } else {
                    setIsChange(false)
                }
        })
    })

  return (
      <Router>
          <ScrollToTop>
          <div className="App">
              <NavStyled ref={el => (navBar = el)}>
                  <Link to='/'>
                  <LogoStyled  src={isChange === false ? (LogoWhite):(LogoBlack)}></LogoStyled>
                  </Link>
                  <StyledLink to='/'>Home</StyledLink>
                  <StyledLink to='services'>Usługi</StyledLink>
                  <StyledLink to='contact'>Kontakt</StyledLink>

                  <Hamburder colors={isChange}/>
              </NavStyled>
                    <Switch>
                        <Route exact  path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/services" component={Services} />
                        <Route component={PageNotFind}/>
                    </Switch>
              </div>
          </ScrollToTop>
      </Router>
  );
}

export default App;
