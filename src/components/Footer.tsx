import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--glass-bg)', 
      backdropFilter: 'blur(20px)', 
      borderTop: '1px solid rgba(1, 0, 3, 0.426)', 
      padding: '40px 20px', 
      textAlign: 'center', 
      marginTop: '100px'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          marginBottom: '30px', 
          flexWrap: 'wrap'
        }}>
          <a 
            href="#" 
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--neon-purple)';
              e.currentTarget.style.textShadow = '0 0 10px var(--neon-purple)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.textShadow = 'none';
            }}
            style={{
              color: 'var(--text-secondary)', 
              textDecoration: 'none', 
              transition: 'all 0.3s ease', 
              fontSize: '1.5rem'
            }}
          >
            🐙
          </a>
          <a 
            href="#" 
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--neon-purple)';
              e.currentTarget.style.textShadow = '0 0 10px var(--neon-purple)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.textShadow = 'none';
            }}
            style={{
              color: 'var(--text-secondary)', 
              textDecoration: 'none', 
              transition: 'all 0.3s ease', 
              fontSize: '1.5rem'
            }}
          >
            💼
          </a>
          <a 
            href="#" 
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--neon-purple)';
              e.currentTarget.style.textShadow = '0 0 10px var(--neon-purple)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.textShadow = 'none';
            }}
            style={{
              color: 'var(--text-secondary)', 
              textDecoration: 'none', 
              transition: 'all 0.3s ease', 
              fontSize: '1.5rem'
            }}
          >
            🐦
          </a>
          <a 
            href="#" 
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--neon-purple)';
              e.currentTarget.style.textShadow = '0 0 10px var(--neon-purple)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.textShadow = 'none';
            }}
            style={{
              color: 'var(--text-secondary)', 
              textDecoration: 'none', 
              transition: 'all 0.3s ease', 
              fontSize: '1.5rem'
            }}
          >
            📸
          </a>
          <a 
            href="#" 
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--neon-purple)';
              e.currentTarget.style.textShadow = '0 0 10px var(--neon-purple)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.textShadow = 'none';
            }}
            style={{
              color: 'var(--text-secondary)', 
              textDecoration: 'none', 
              transition: 'all 0.3s ease', 
              fontSize: '1.5rem'
            }}
          >
            📹
          </a>
        </div>
        
        <p style={{color: 'var(--text-secondary)', marginBottom: '10px'}}>
          © 2025 Restu Almanzil Akyla Fajni. All rights reserved.
        </p>
        <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
          Crafted bcs i'm bored
        </p>
      </div>
    </footer>
  );
};

export default Footer;