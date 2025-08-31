// Dynamic functionality for L'sière Parfumerie website

document.addEventListener('DOMContentLoaded', function() {
    // Enable horizontal scrolling
    enableHorizontalScroll();
    
    // Add smooth scroll animations
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Start the logo animation sequence
    startLogoAnimation();
    
    // Add interactive hover effects
    addHoverEffects();
    
    // Add page transitions
    addPageTransitions();
});

function enableHorizontalScroll() {
    // Prevent vertical scrolling and enable horizontal scrolling
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'auto';
    
    // Handle wheel events for horizontal scrolling
    const container = document.querySelector('.horizontal-container');
    if (container) {
        container.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        }, { passive: false });
        
        // Handle arrow keys for navigation
        document.addEventListener('keydown', function(e) {
            const scrollAmount = window.innerWidth;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    container.scrollLeft -= scrollAmount;
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    container.scrollLeft += scrollAmount;
                    break;
            }
        });
    }
}

function startLogoAnimation() {
    const logoImage = document.querySelector('.logo-image');
    const arrowIcon = document.querySelector('.arrow-icon');
    
    // Step 1: Clear logo blur after a short delay
    setTimeout(() => {
        if (logoImage) {
            logoImage.classList.add('logo-clear');
        }
    }, 800);
    
    // Step 2: Show navigation arrow
    setTimeout(() => {
        if (arrowIcon) {
            arrowIcon.classList.add('show');
        }
    }, 2000);
    
    // Step 3: Load other page elements
    setTimeout(() => {
        const otherElements = document.querySelectorAll('.about-content, .about-content-page');
        otherElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-30px)';
            element.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 100);
        });
    }, 2200);
}

function addHoverEffects() {
    const navButtons = document.querySelectorAll('.about-link, .home-link');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
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