// ===================================
// MAIN JAVASCRIPT
// Portfolio functionality with i18n
// ===================================

// ===================================
// I18N - INTERNATIONALIZATION
// ===================================
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.translations = window.translations || {};
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const lang = browserLang.split('-')[0];
        return this.translations[lang] ? lang : 'es';
    }

    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        this.applyTranslations();
        this.updateLanguageDisplay();
    }

    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLang][key];
            
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    updateLanguageDisplay() {
        const langDisplay = document.getElementById('currentLang');
        if (langDisplay) {
            langDisplay.textContent = this.currentLang.toUpperCase();
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// LANGUAGE SELECTOR
// ===================================
function initLanguageSelector(i18n) {
    const languageBtn = document.getElementById('languageBtn');
    const languageOptions = document.getElementById('languageOptions');
    const languageLinks = document.querySelectorAll('.language-option');

    if (!languageBtn || !languageOptions) return;

    // Toggle language menu
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageOptions.classList.toggle('show');
    });

    // Select language
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            i18n.setLanguage(lang);
            languageOptions.classList.remove('show');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            languageOptions.classList.remove('show');
        }
    });
}

// ===================================
// SKILL MODAL
// ===================================
function initSkillModal() {
    const skillCards = document.querySelectorAll('.skill-card');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalExamples = document.getElementById('modalExamples');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (!modalOverlay || !skillCards.length) return;

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skill = card.getAttribute('data-skill');
            const skillInfo = window.skillDescriptions?.[skill];
            
            if (skillInfo) {
                modalTitle.textContent = skillInfo.title;
                modalDescription.textContent = skillInfo.description;
                modalExamples.textContent = skillInfo.examples;
                modalOverlay.classList.add('modal-show');
            }
        });
    });

    // Close modal handlers
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('modal-show');
        });
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('modal-show');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalOverlay.classList.remove('modal-show');
            const languageOptions = document.getElementById('languageOptions');
            if (languageOptions) {
                languageOptions.classList.remove('show');
            }
        }
    });
}

// ===================================
// INTERSECTION OBSERVER
// ===================================
function initScrollAnimations() {
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

    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observe featured cards
    document.querySelectorAll('.featured-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.7s ease-out';
        observer.observe(card);
    });

    // Observe impact cards
    document.querySelectorAll('.impact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navMenu) return;

    // Create hamburger button if it doesn't exist
    let menuToggle = document.querySelector('.menu-toggle');
    
    if (!menuToggle && window.innerWidth <= 768) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        
        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
            navContainer.insertBefore(menuToggle, navContainer.firstChild);
        }

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when clicking nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
function initScrollToTop() {
    // Create button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        z-index: 999;
    `;
    
    document.body.appendChild(scrollBtn);

    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// GITHUB STATS (OPTIONAL)
// ===================================
async function loadGitHubStats() {
    const username = 'E-Gregorio';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        // You can display these stats somewhere if needed
        console.log('GitHub Stats:', {
            repos: data.public_repos,
            followers: data.followers,
            following: data.following
        });
    } catch (error) {
        console.warn('Could not load GitHub stats:', error);
    }
}

// ===================================
// ANALYTICS (OPTIONAL)
// ===================================
function trackEvent(category, action, label) {
    // If you add Google Analytics or similar
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track important interactions
function initAnalytics() {
    // Track GitHub link clicks
    document.querySelectorAll('a[href*="github.com"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('External Link', 'Click', 'GitHub');
        });
    });

    // Track project views
    document.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectName = card.querySelector('h3')?.textContent;
            trackEvent('Project', 'View', projectName);
        });
    });
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio initialized');

    // Initialize i18n
    const i18n = new I18n();
    i18n.setLanguage(i18n.getCurrentLanguage());

    // Initialize all modules
    initSmoothScroll();
    initLanguageSelector(i18n);
    initSkillModal();
    initScrollAnimations();
    initMobileMenu();
    initScrollToTop();
    initAnalytics();

    // Optional: Load GitHub stats
    // loadGitHubStats();

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initMobileMenu();
        }, 250);
    });

    console.log('✅ All modules loaded successfully');
});

// ===================================
// DASHBOARD LIGHTBOX
// ===================================
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('dashboardLightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('dashboardLightbox');

    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ===================================
// PERFORMANCE MONITORING
// ===================================
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
            }
        }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
}
