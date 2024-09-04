

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






// BROJKE


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 1000; // Sporije učitavanje brojki - povećanje vrednosti

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => {
                animateCounter(counter);
            }, 20); // Povećano vreme za sporiju animaciju
        } else {
            counter.innerText = target;
        }
    };

    const checkVisibilityAndAnimate = () => {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                animateCounter(counter);
                counter.parentElement.classList.add('in-viewport');
            } else {
                counter.parentElement.classList.remove('in-viewport');
            }
        });
    };

    window.addEventListener('scroll', checkVisibilityAndAnimate);
    checkVisibilityAndAnimate(); // Initial check in case the counter is already in view
});






// faq


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});





