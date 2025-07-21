import React from 'react';

const Portfolio = () => {
  return (
    <section className="section fade-in" id="portfolio">
      <h2 className="section-title">Featured Projects</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-image">💻</div>
          <div className="portfolio-content">
            <h3>Neural Network Visualizer</h3>
            <p>Interactive web application that visualizes machine learning algorithms in real-time, built with React and D3.js for educational purposes.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-image">🎨</div>
          <div className="portfolio-content">
            <h3>Digital Art Collection</h3>
            <p>Series of futuristic character illustrations combining traditional art techniques with digital innovation, featured in multiple galleries.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-image">📱</div>
          <div className="portfolio-content">
            <h3>Tech Content Series</h3>
            <p>Educational video series explaining complex programming concepts through engaging visual storytelling and animated demonstrations.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-image">🚀</div>
          <div className="portfolio-content">
            <h3>Space Exploration App</h3>
            <p>Mobile application providing real-time space data and immersive AR experiences for astronomy enthusiasts and students.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-image">🎬</div>
          <div className="portfolio-content">
            <h3>Brand Identity Package</h3>
            <p>Complete visual identity system for tech startups, including logo design, brand guidelines, and digital asset creation.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-image">⚡</div>
          <div className="portfolio-content">
            <h3>Performance Dashboard</h3>
            <p>Real-time analytics platform with custom data visualizations and automated reporting features for business intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;