// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.padding = '0.75rem 0';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
    }

    lastScroll = currentScroll;
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

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe client cards
const clientCards = document.querySelectorAll('.client-card');
clientCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Observe stats
const statItems = document.querySelectorAll('.stat-item');
statItems.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        // Toggle mobile menu styles
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(26, 26, 26, 0.98)';
            navLinks.style.padding = '2rem';
            navLinks.style.backdropFilter = 'blur(20px)';
            navLinks.style.borderRadius = '0 0 20px 20px';
            navLinks.style.borderTop = '1px solid #3A3A3A';
            navLinks.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.5)';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            // Only hide menu if it's in mobile mode (has active class)
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                navLinks.style.display = 'none';
            }
        });
    });
}

// Parallax effect for gradient orbs
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX * speed) - (speed / 2);
        const y = (mouseY * speed) - (speed / 2);

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Counter animation for stats (when they come into view)
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Tech cards interaction
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animationPlayState = 'paused';
    });
    card.addEventListener('mouseleave', () => {
        card.style.animationPlayState = 'running';
    });
});

// Modal functionality for tech cards
const modal = document.getElementById('tech-modal');
const modalClose = document.querySelector('.modal-close');
const modalPanels = document.querySelectorAll('.modal-panel');

// Function to close modal
const closeModal = () => {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Open modal when clicking tech cards
if (modal && modalPanels.length > 0) {
    techCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            const modalId = card.getAttribute('data-modal');

            // Hide all panels
            modalPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // Show the selected panel
            const selectedPanel = document.querySelector(`.modal-panel[data-panel="${modalId}"]`);
            if (selectedPanel) {
                selectedPanel.classList.add('active');
            }

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking close button
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });
    }

    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Observe stats for counter animation (only for numeric values)
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent;

            // Only animate if it's a pure number
            if (!isNaN(text)) {
                animateCounter(number, parseInt(text));
            }
        }
    });
}, { threshold: 0.5 });

statItems.forEach(item => {
    statsObserver.observe(item);
});

// Add glitch effect on hover to title
const glitchTitle = document.querySelector('.glitch');
if (glitchTitle) {
    glitchTitle.addEventListener('mouseenter', () => {
        glitchTitle.style.animation = 'none';
        setTimeout(() => {
            glitchTitle.style.animation = '';
        }, 10);
    });
}

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.style.background = '';
                a.style.color = '';
            });
            link.style.background = '#2D2D2D';
            link.style.color = '#D4AF37';
        }
    });
});

// Cursor trail effect (optional, modern touch)
const createCursorTrail = () => {
    let cursorTrail = [];
    const trailLength = 20;

    document.addEventListener('mousemove', (e) => {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

        if (cursorTrail.length > trailLength) {
            cursorTrail.shift();
        }
    });
};

// Initialize cursor trail (commented out by default, uncomment to enable)
// createCursorTrail();

console.log('TechImbue website loaded successfully!');
