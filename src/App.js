import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Menu from './Components/Menu';
import ImageSection from './Components/ImageSection';
import SectionA from './Components/SectionA';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <ImageSection />
      <SectionA />
      <Menu />
    </div>
  );
}

export default App;
