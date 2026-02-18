document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
             icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe sections and elements with fade-in classes
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Also observe the stats specifically for future number animation
    const statsSection = document.getElementById('stats');
    if(statsSection) observer.observe(statsSection);

});
