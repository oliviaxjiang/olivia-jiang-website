import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Helmet>
        <title>Olivia Jiang</title>
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/assets/star_icon.png" sizes="40x40" />
    </Helmet>
    <title>Olivia Jiang</title>
      <Sidebar/>
      <main className = 'main'>
        <Home/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  );
  
}

export default App;
