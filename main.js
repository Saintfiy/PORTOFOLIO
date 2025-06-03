
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Floating particles animation
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 8000);
        }

        // Create particles periodically
        setInterval(createParticle, 300);

        // Enhanced hover effects for portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.03)';
                this.style.boxShadow = '0 40px 80px rgba(139, 92, 246, 0.4)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.1)';
            });
        });

        // Skill bars animation on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                        bar.style.transition = 'width 2s ease-in-out';
                    }, 200);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });

        // Form submission handler
        document.querySelector('.contact-form form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animate submit button
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent! ✨';
                submitBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(135deg, var(--primary-purple), var(--electric-purple))';
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Dynamic background gradient shift
        let gradientAngle = 135;
        setInterval(() => {
            gradientAngle += 0.5;
            document.body.style.background = `linear-gradient(${gradientAngle}deg, var(--dark-bg) 0%, #1A0B2E 50%, var(--deep-violet) 100%)`;
        }, 100);

        // Cursor trail effect
        let mouseX = 0, mouseY = 0;
        let trailElements = [];

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function createTrail() {
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, var(--neon-purple), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${mouseX - 3}px;
                top: ${mouseY - 3}px;
                opacity: 0.8;
                transition: all 0.5s ease-out;
            `;
            
            document.body.appendChild(trail);
            trailElements.push(trail);
            
            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0)';
            }, 10);
            
            setTimeout(() => {
                trail.remove();
                trailElements = trailElements.filter(t => t !== trail);
            }, 500);
        }

        setInterval(createTrail, 50);

        // Glitch effect for title on hover
        const heroTitle = document.querySelector('.hero-title');
        const originalTitle = heroTitle.textContent;
        
        heroTitle.addEventListener('mouseenter', () => {
            const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            let iterations = 0;
            
            const glitchInterval = setInterval(() => {
                heroTitle.textContent = originalTitle
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalTitle[index];
                        }
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    })
                    .join('');
                
                if (iterations >= originalTitle.length) {
                    clearInterval(glitchInterval);
                    heroTitle.textContent = originalTitle;
                }
                
                iterations += 1/3;
            }, 30);
        });

        // Parallax effect for sections
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.section');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 1s ease-in-out';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Easter egg: Konami code
        let konamiCode = [];
        const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                // Activate special mode
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
                konamiCode = [];
            }
        });
    