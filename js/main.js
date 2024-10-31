// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Selector de idioma
const languageBtn = document.querySelector('.language-btn');
const languageOptions = document.querySelector('.language-options');

languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageOptions.classList.toggle('show');
});

// Cerrar el menú de idiomas cuando se hace clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        languageOptions.classList.remove('show');
    }
});

// Modal de habilidades
const skillCards = document.querySelectorAll('.skill-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalExamples = document.getElementById('modalExamples');
const closeModalBtn = document.getElementById('closeModalBtn');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const skill = card.getAttribute('data-skill');
        const skillInfo = skillDescriptions[skill];
        
        if (skillInfo) {
            modalTitle.textContent = skillInfo.title;
            modalDescription.textContent = skillInfo.description;
            modalExamples.textContent = skillInfo.examples;
            modalOverlay.classList.add('modal-show');
        }
    });
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('modal-show');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('modal-show');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalOverlay.classList.remove('modal-show');
        languageOptions.classList.remove('show');
    }
});

// Animación de entrada para las tarjetas
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});