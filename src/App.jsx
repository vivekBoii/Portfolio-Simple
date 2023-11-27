import React from 'react';
import Nabar from './Component/Navbar/Nabar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Project from './Component/Projects/Project';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <>
      <Nabar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App