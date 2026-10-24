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

// Animate elements on scroll - ULTRA DRAMATIC VERSION
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate IN - BIG ENTRANCE
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1) rotateY(0) rotateX(0)';
        } else {
            // Reset animation when scrolling away
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(120px) scale(0.75) rotateY(25deg) rotateX(10deg)';
        }
    });
}, observerOptions);

// Observe project cards and hobby cards with ULTRA DRAMATIC ANIMATIONS
document.querySelectorAll('.project-card, .hobby-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(120px) scale(0.75) rotateY(25deg) rotateX(10deg)';
    el.style.transition = 'opacity 1s ease-out, transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
    el.style.perspective = '1200px';
    el.style.transformStyle = 'preserve-3d';
    observer.observe(el);
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


/* =================================
   REPEATING SCROLL REVEAL ANIMATIONS
================================= */


/* REPEATING SCROLL REVEAL ANIMATIONS */
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(`
        .hero-content,
        .hero-illustration,
        .hobbies h2,
        .hobbies .section-subtitle,
        .hobby-card,
        .about-content,
        .about-image,
        .skills h2,
        .skills .section-subtitle,
        .skill-category,
        .projects h2,
        .projects .section-subtitle,
        .project-card,
        .contact h2,
        .contact .section-subtitle,
        .contact-form,
        .contact-info
    `);

    animatedElements.forEach((element) => {
        element.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    }, {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});

