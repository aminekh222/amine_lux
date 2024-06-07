// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Le site est prêt');
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Veuillez remplir tous les champs.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Message envoyé avec succès !';
            formMessage.style.color = 'green';
            contactForm.reset();
        }
    });
});