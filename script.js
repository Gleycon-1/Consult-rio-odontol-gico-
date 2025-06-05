document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo (Hambúrguer)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (no mobile)
    document.querySelectorAll('.nav-menu ul li a').forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Animação de Revelação ao Scroll
    const sections = document.querySelectorAll('.reveal-section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // A seção se torna visível quando 10% dela entra na viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para a observação uma vez que a animação foi disparada
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // A função updateHeroBackground() foi removida pois o hero agora usa uma tag <img>
    // e não um background-image no CSS. A responsividade da imagem é tratada via CSS.
});