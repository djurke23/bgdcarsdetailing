

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







// slider after before


const container = document.querySelector('.image-container5');
        const beforeWrapper = document.querySelector('.image-wrapper-before');
        const slider = document.querySelector('.slider5');
        let isActive = false;

        const calculatePercentage = (event) => {
            const { left, width } = container.getBoundingClientRect();
            let pos = (event.clientX - left) / width;
            pos = Math.max(0, Math.min(1, pos));
            return pos * 100;
        };

        const updateSlider = (percentage) => {
            beforeWrapper.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
            slider.style.left = `${percentage}%`;
        };

        const move = (event) => {
            if (!isActive) return;
            const percentage = calculatePercentage(event);
            updateSlider(percentage);
        };

        // Mouse events
        container.addEventListener('mousedown', () => isActive = true);
        window.addEventListener('mouseup', () => isActive = false);
        window.addEventListener('mousemove', move);

        // Touch events
        container.addEventListener('touchstart', (e) => {
            isActive = true;
        });

        window.addEventListener('touchend', () => {
            isActive = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isActive) return;
            const touch = e.touches[0];
            const mockEvent = {
                clientX: touch.clientX
            };
            move(mockEvent);
        });

        // Prevent image dragging
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });