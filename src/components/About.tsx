import React from 'react';

const About = () => {
  return (
    <section className="section fade-in" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-card">
            <img 
              src="foto1.jpg" 
              alt="Foto Restu" 
              className="profile-avatar" 
              style={{
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
                marginBottom: '10px'
              }} 
            />
            <h3>Student</h3>
            <p>UNIVERSITAS MUHAMMADIYAH MALANG</p>
          </div>
        </div>

        <div className="about-text">
          <p>Welcome to my digital universe! I'm Restu Almanzil Akyla Fajni, a passionate multi-disciplinary creator who bridges the gap between technology and artistry. With expertise spanning programming, illustration, I transform complex ideas into elegant digital experiences.</p>
          <p>My journey began with a fascination for how code could create beauty, leading me to explore the intersection of technical precision and creative expression. Today, I craft immersive applications, stunning visual narratives, and engaging content that resonates with audiences across the digital landscape.</p>
          <p>Whether I'm architecting robust systems, designing captivating illustrations, or producing compelling content, my mission remains constant: to push the boundaries of what's possible and create experiences that inspire and delight.</p>
        </div>
      </div>
    </section>
  );
};

export default About;