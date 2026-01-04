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
    // --- CUSTOM CURSOR LOGIC ---
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cursorDot = document.createElement('div');
        cursorDot.classList.add('cursor-dot');

        const cursorOutline = document.createElement('div');
        cursorOutline.classList.add('cursor-outline');

        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Update Custom Cursor
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Smooth trailing animation for outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 400, fill: "forwards" });

            // Update Background CSS Variables
            document.documentElement.style.setProperty('--cursor-x', `${posX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${posY}px`);
        });

        // Hover scales
        const interactive = document.querySelectorAll('a, button, .card, .product-card, .hamburger');
        interactive.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }
});
