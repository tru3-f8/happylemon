import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Location from './Components/Location';
import styled from 'styled-components';
import NavbarMainPage from './Components/NavbarMainPage';

function App() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path exact='/'>
            <NavbarMainPage />
            <Main />
          </Route>
          <Route path='/menu'>
            <Navbar />
            <Menu />
          </Route>
          <Route path='/about'>
            <Navbar />
            <About />
          </Route>
          <Route path='/contact'>
            <Navbar />
            <Contact />
          </Route>
          <Route path='/location'>
            <Navbar />
            <Location />
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  
`;
