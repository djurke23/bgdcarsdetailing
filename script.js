

// o nama v2



document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('mouseover', () => {
            service.style.transform = 'translateX(10px)';
        });
        service.addEventListener('mouseout', () => {
            service.style.transform = 'translateX(0)';
        });
    });
});






// CENE

// Dodavanje jednostavne animacije kada kartice postanu vidljive

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const screenPosition = window.innerHeight / 1.3;

    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;

        if (cardPosition < screenPosition) {
            card.classList.add('appear');
        } else {
            card.classList.remove('appear');
        }
    });
});













// faq


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});





