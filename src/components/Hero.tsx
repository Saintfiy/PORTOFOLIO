import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <spline-viewer 
        className="robot-3d" 
        url="https://prod.spline.design/1dcxapFMBHoCIfHs/scene.splinecode"
      />
      <div className="hero-content">
        <h1 className="hero-title">RESTU ALMANZIL AKYLA FAJNI</h1>
        <p className="hero-subtitle"></p>
        <a className="cta-button" href="#about">Explore My Universe</a>
      </div>
    </section>
  );
};

export default Hero;