// Full Screen Overlay Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;

    if (hamburger && menuOverlay) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking on overlay background
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.overlay-menu a').forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close menu function
        function closeMenu() {
            hamburger.classList.remove('active');
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Close menu on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section (optional)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    
    // Set hero section visible immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
});

// Sponsors Marquee Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
    const marquees = document.querySelectorAll('.sponsors-marquee');
    
    marquees.forEach(marquee => {
        const track = marquee.querySelector('.marquee-track');
        
        if (track) {
            // Pause on hover
            marquee.addEventListener('mouseenter', () => {
                track.style.animationPlayState = 'paused';
            });
            
            // Resume on mouse leave
            marquee.addEventListener('mouseleave', () => {
                track.style.animationPlayState = 'running';
            });
            
            // Random animation delays for more organic feel
            const randomDelay = Math.random() * 5;
            track.style.animationDelay = `-${randomDelay}s`;
        }
    });
    
    // Add slight random speed variations
    const tracks = document.querySelectorAll('.marquee-track');
    tracks.forEach((track, index) => {
        const baseSpeed = track.dataset.direction === 'right' ? 30 : 25;
        const variation = (Math.random() - 0.5) * 5; // ±2.5s variation
        const newSpeed = baseSpeed + variation;
        
        if (track.dataset.direction === 'right') {
            track.style.animation = `marqueeRight ${newSpeed}s linear infinite`;
        } else {
            track.style.animation = `marqueeLeft ${newSpeed}s linear infinite`;
        }
    });
});