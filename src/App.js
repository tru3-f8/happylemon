import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Components/Main';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path exact='/'>
            <Main />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
