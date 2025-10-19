
const observerOptions = {
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' //
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
        }
    });
}, observerOptions);


function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.second-section, .calculator, .we-info, .third-section, .benefit-info, .fourth-section, .office-container, .semi-footer'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}
