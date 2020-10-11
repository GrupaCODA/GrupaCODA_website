import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import styled from "styled-components";

import Home from './pages/home';
import Contact from "./pages/contact";
import Services from "./pages/services";
import ScrollToTop from "./components/ScrollToTop";

import Hamburder from "./components/Hamburger";
import Logo from "./assets/logo.jpg";


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
    
    
    `;

    const LogoStyled = styled.img`
width: 40%;
height: auto;

`;

  return (
      <Router>
          <ScrollToTop>
          <div className="App">
              <NavStyled>
                  <Link to='/'>
                  <LogoStyled src={Logo}></LogoStyled>
                  </Link>
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
