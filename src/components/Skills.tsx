import React from 'react';

const Skills = () => {
  return (
    <section className="section fade-in" id="skills">
      <h2 className="section-title">Technical Arsenal</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>🚀 Programming</h3>
          <div className="skill-item">
            <div className="skill-name">
              <span>JavaScript/TypeScript</span>
              <span>80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Python</span>
              <span>70%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '70%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>React/Next.js</span>
              <span>70%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '70%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Node.js</span>
              <span>88%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '88%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>🎨 Design &amp; Illustration</h3>
          <div className="skill-item">
            <div className="skill-name">
              <span>Adobe Creative Suite</span>
              <span>78%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '78%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Figma/UI Design</span>
              <span>76%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '76%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>3D Modeling</span>
              <span>85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Digital Illustration</span>
              <span>0%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>📱 Content Creation</h3>
          <div className="skill-item">
            <div className="skill-name">
              <span>Video Production</span>
              <span>0%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '0%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Social Media Strategy</span>
              <span>0%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '0%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Brand Development</span>
              <span>84%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '84%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">
              <span>Storytelling</span>
              <span>0%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;