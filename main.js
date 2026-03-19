// Page Navigation
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageName + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Instagram Redirect Functionality

const INSTAGRAM_URL = 'https://www.instagram.com/nord_afrik?igsh=NWc0MGxoeGxldmp4';

//  click event to all Instagram redirect buttons
document.addEventListener('DOMContentLoaded', function() {
    const instagramButtons = document.querySelectorAll('.instagram-redirect-btn');
    
    instagramButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Open Instagram in a new tab
            window.open(INSTAGRAM_URL, '_blank');
            
            // Optional: You can also add tracking or analytics here
            console.log('Instagram redirect clicked');
        });
    });
    
    // Smooth scroll for hero CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const catalogSection = document.querySelector('.catalog-section');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Optional: Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Optional: Add animation on scroll
function revealOnScroll() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize product cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
