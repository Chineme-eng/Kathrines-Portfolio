document.addEventListener('DOMContentLoaded', () => {
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible, add the 'active' class
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Target all sections and project cards to reveal
    const revealElements = document.querySelectorAll('.hero, .project-card, .about-content, .contact-card');
    
    revealElements.forEach(el => {
        el.classList.add('reveal'); // Add the initial hidden state
        observer.observe(el);       // Start watching the element
    });
});
