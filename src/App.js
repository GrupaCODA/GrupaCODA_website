import React, {useRef, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import styled from "styled-components";

import Home from './pages/home';
import Contact from "./pages/contact";
import Services from "./pages/services";
import ScrollToTop from "./components/ScrollToTop";

import Hamburder from "./components/Hamburger";
import Logo from "./assets/logo.jpg";
import {ChangeBackgroundColor, ChangeTextColor} from "./components/animation";


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

width: 70%;

}
`;

    const StyledLink = styled(Link)`
text-decoration: none;
opacity: 0;
color: #fff;

@media(min-width: 1024px) {

width: 70%; 
opacity: 1;
color: #fff;
font-size: 30px;
text-transform: uppercase;
font-weight: 600;

}
    
`;

let navBar = useRef(null);
let {navLink1, navLink2, navLink3} = useRef(null)

    useEffect(() => {

        const sections = document.querySelectorAll('section')

    ChangeBackgroundColor(navBar, sections);
    ChangeTextColor(navLink1,navLink2,navLink3,sections);
    })

  return (
      <Router>
          <ScrollToTop>
          <div className="App">
              <NavStyled ref={el => (navBar = el)}>
                  <Link to='/'>
                  <LogoStyled  src={Logo}></LogoStyled>
                  </Link>
                  <StyledLink ref={el => (navLink1 = el)} to='/'>Home</StyledLink>
                  <StyledLink ref={el => (navLink2 = el)} to='services'>Nasze usługi</StyledLink>
                  <StyledLink ref={el => (navLink3 = el)} to='contact'>Kontakt</StyledLink>

                  <Hamburder/>
              </NavStyled>
            <Switch>
              <Route  path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
            </Switch>
          </div>
          </ScrollToTop>
      </Router>
  );
}

export default App;
