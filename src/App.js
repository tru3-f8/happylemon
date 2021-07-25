import React from 'react';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import './App.css';
import Menu from './Components/Menu';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <ImageSlider />
      <Menu />
    </div>
  );
}

export default App;
