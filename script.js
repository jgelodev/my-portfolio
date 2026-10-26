// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);

    // Simple validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });

    if (isValid) {
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(42, 42, 78, 0.8)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(42, 42, 78, 0.3)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill) {
        progressFill.style.width = scrollPercent + '%';
    }
    if (progressText) {
    progressText.textContent = 'Downloading ' + Math.round(scrollPercent) + '%';
}
});

// PREMIUM Scroll Animations - Professional PowerPoint Style
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Smooth fade-in with stagger
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
            }, index * 80); // Stagger delay
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(40px) translateX(-20px) scale(0.95)';
        }
    });
}, observerOptions);

// Apply to all cards with smooth, premium animation
document.querySelectorAll('.project-card, .hobby-card, .skill-category').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) translateX(-20px) scale(0.95)';
    el.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    el.style.perspective = '1000px';
    el.style.transformStyle = 'preserve-3d';
    el.dataset.index = index;
    observer.observe(el);
});

// Smooth parallax on sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const scrollPosition = window.scrollY;
        const elementPosition = section.offsetTop;
        const distance = scrollPosition - elementPosition;

        if (Math.abs(distance) < window.innerHeight * 1.5) {
            section.style.backgroundPosition = `0 ${distance * 0.5}px`;
        }
    });
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-primary)';
        }
    });
});

// Responsive mobile menu styling
function updateMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
}

window.addEventListener('resize', updateMobileMenu);
updateMobileMenu();

// Prevent form default submit if no backend
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear form fields
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.value = '');

        // Show success message
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent! ✓';
        btn.style.background = 'var(--accent)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    });
});

// Log for debugging
console.log('Portfolio website loaded successfully!');