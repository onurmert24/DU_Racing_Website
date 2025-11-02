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

// DU RACING Weight Animation - Mouse X Position Based
document.addEventListener('DOMContentLoaded', function() {
    const weightTextActive = document.querySelector('.weight-active');
    const weightBackgrounds = document.querySelectorAll('.weight-bg');
    
    if (weightTextActive && weightBackgrounds.length > 0) {
        // Font variations in order: weight and style
        const fontVariations = [
            { weight: 100, style: 'normal', name: 'Thin' },              // 0
            { weight: 200, style: 'normal', name: 'ExtraLight' },        // 1
            { weight: 300, style: 'normal', name: 'Light' },             // 2
            { weight: 400, style: 'normal', name: 'Regular' },           // 3
            { weight: 500, style: 'normal', name: 'Medium' },            // 4
            { weight: 600, style: 'normal', name: 'SemiBold' },          // 5
            { weight: 700, style: 'normal', name: 'Bold' },              // 6
            { weight: 800, style: 'normal', name: 'ExtraBold' },         // 7
            { weight: 800, style: 'italic', name: 'ExtraBold Italic' },  // 8
            { weight: 700, style: 'italic', name: 'Bold Italic' },       // 9
            { weight: 600, style: 'italic', name: 'SemiBold Italic' },   // 10
            { weight: 500, style: 'italic', name: 'Medium Italic' },     // 11
            { weight: 400, style: 'italic', name: 'Regular Italic' },    // 12
            { weight: 300, style: 'italic', name: 'Light Italic' },      // 13
            { weight: 200, style: 'italic', name: 'ExtraLight Italic' }, // 14
            { weight: 100, style: 'italic', name: 'Thin Italic' }        // 15
        ];
        
        let isHovering = false;
        let currentActiveIndex = 3; // Default to Regular
        
        // Track mouse enter
        weightTextActive.addEventListener('mouseenter', () => {
            isHovering = true;
        });
        
        // Track mouse leave
        weightTextActive.addEventListener('mouseleave', () => {
            isHovering = false;
            // Reset to default
            weightTextActive.style.fontWeight = '400';
            weightTextActive.style.fontStyle = 'normal';
            weightTextActive.style.letterSpacing = '-4px';
            currentActiveIndex = 3;
            
            // Show all backgrounds equally
            weightBackgrounds.forEach(bg => {
                bg.classList.remove('active-hidden');
                bg.style.opacity = '0.2';
            });
        });
        
        // Track mouse movement over the element
        weightTextActive.addEventListener('mousemove', (e) => {
            if (!isHovering) return;
            
            // Get the element's bounding box
            const rect = weightTextActive.getBoundingClientRect();
            
            // Calculate mouse position relative to element (0 to 1)
            const mouseX = e.clientX - rect.left;
            const relativeX = mouseX / rect.width;
            
            // Map to font variation index (0 to 15)
            const variationIndex = Math.floor(relativeX * fontVariations.length);
            const clampedIndex = Math.max(0, Math.min(fontVariations.length - 1, variationIndex));
            
            // Only update if index changed
            if (clampedIndex !== currentActiveIndex) {
                currentActiveIndex = clampedIndex;
                
                // Get selected variation for active
                const selectedVariation = fontVariations[clampedIndex];
                
                // Map letter spacing
                let letterSpacing;
                if (clampedIndex <= 7) {
                    letterSpacing = -2 - (clampedIndex * 0.5);
                } else {
                    letterSpacing = -2 - ((15 - clampedIndex) * 0.5);
                }
                
                // Apply styles to active text
                weightTextActive.style.fontWeight = selectedVariation.weight;
                weightTextActive.style.fontStyle = selectedVariation.style;
                weightTextActive.style.letterSpacing = `${letterSpacing}px`;
                
                // Update background layers visibility
                weightBackgrounds.forEach((bg, index) => {
                    if (index === clampedIndex) {
                        // Hide the one matching active
                        bg.classList.add('active-hidden');
                        bg.style.opacity = '0';
                    } else {
                        // Show all others
                        bg.classList.remove('active-hidden');
                        bg.style.opacity = '0.2';
                    }
                });
            }
        });
    }
});
// About Page Tabs
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.about-tab');
    const contents = document.querySelectorAll('.about-tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
