import React, { useEffect, useState } from 'react';
import './home.css';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  return (
    <section className="home container" id="home">
      <div className={`intro ${showIntro ? 'show' : ''}`}>
        <h1 className="home_name">Olivia Jiang</h1>
        <span className="home_education">Computer Science Student @ Cornell</span>
        <div className="home_rest">
            <HeaderSocials />
            <a href="#contact" className="btn">
            Contact Me!
            </a>
            <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Home;
