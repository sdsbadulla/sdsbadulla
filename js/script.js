document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hamburger Menu Functionality ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        // Toggle active class for styling if needed, or just toggle display
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            // Basic mobile menu styling injected dynamically
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '2rem';
            navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            navMenu.style.zIndex = '999';
        }
    });

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other items first (optional, remove this block if you want multiple open)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });

    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});