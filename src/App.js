import React, { useEffect } from 'react';
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

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route path exact='/'>
            <Main />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/location'>
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
  overflow-x: hidden;
`;
