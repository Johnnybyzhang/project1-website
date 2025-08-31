// Dynamic functionality for L'sière Parfumerie website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll animations
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animation for page load
    addPageLoadAnimation();
    
    // Add interactive hover effects
    addHoverEffects();
    
    // Add parallax scrolling effect
    addParallaxEffect();
    
    // Add typing animation for brand name
    addTypingAnimation();
    
    // Add floating animation for perfume bottles
    addFloatingAnimation();
});

function addPageLoadAnimation() {
    const elements = document.querySelectorAll('.content-overlay, .about-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300);
    });
}

function addHoverEffects() {
    const navButtons = document.querySelectorAll('.nav-button a, .home-link');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
            this.style.filter = 'blur(0px)';
            this.parentElement.style.filter = 'blur(0px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = '';
            this.parentElement.style.filter = 'blur(100px)';
        });
        
        button.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
        });
    });
}

function addParallaxEffect() {
    const images = document.querySelectorAll('.perfume-bottle, .model-image, .background-image');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        images.forEach((img, index) => {
            const rate = scrolled * -0.3 * (index + 1);
            img.style.transform = `translateY(${rate}px)`;
        });
    });
}

function addTypingAnimation() {
    const brandName = document.querySelector('.brand-name');
    if (!brandName) return;
    
    const text = brandName.textContent;
    brandName.textContent = '';
    brandName.style.borderRight = '4px solid #1E1E1E';
    brandName.style.animation = 'blink 1s infinite';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            brandName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            setTimeout(() => {
                brandName.style.borderRight = 'none';
                brandName.style.animation = 'none';
            }, 1000);
        }
    };
    
    setTimeout(typeWriter, 1000);
    
    // Add blinking cursor animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            50% { border-color: transparent; }
        }
    `;
    document.head.appendChild(style);
}

function addFloatingAnimation() {
    const perfumeBottle = document.querySelector('.perfume-bottle');
    if (!perfumeBottle) return;
    
    perfumeBottle.style.animation = 'float 6s ease-in-out infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(1deg); }
            50% { transform: translateY(-20px) rotate(0deg); }
            75% { transform: translateY(-10px) rotate(-1deg); }
        }
    `;
    document.head.appendChild(style);
}

// Add mouse trail effect
document.addEventListener('mousemove', function(e) {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = '#FFD700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
    
    // Add sparkle animation if not exists
    if (!document.querySelector('#sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            @keyframes sparkleAnim {
                0% {
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(2);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add smooth page transitions
function addPageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-out';
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
}

// Initialize page transitions
addPageTransitions();

// Add scroll reveal animation for about page
function addScrollReveal() {
    const aboutText = document.querySelector('.about-text');
    if (!aboutText) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    aboutText.style.opacity = '0';
    aboutText.style.transform = 'translateY(50px)';
    aboutText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    
    observer.observe(aboutText);
}

// Initialize scroll reveal
addScrollReveal();