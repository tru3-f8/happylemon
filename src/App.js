import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';

function App() {
  return (
    <Router>
      <>
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
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
