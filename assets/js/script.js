console.log("MEBP PCM 4 Corporate System Init");

document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL REVEAL ANIMATION ---
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add class to trigger CSS transition
                // Optional: unobserve if you only want it to happen once
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply observer to all key elements
    const revealElements = document.querySelectorAll('.card, .product-card, .section-title, .lead-text, .gallery-item, .mega-title, .tag');
    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Add random slight delay variation for natural feel
        if (index % 3 === 0) el.classList.add('reveal-delay-1');
        if (index % 3 === 1) el.classList.add('reveal-delay-2');

        revealObserver.observe(el);
    });

    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Prevent scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
});
