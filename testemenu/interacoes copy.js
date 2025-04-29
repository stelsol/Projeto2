// Menu responsivo
function clickMenu(event) {
    event.stopPropagation();
    const itens = document.getElementById('itens');
    itens.classList.toggle('mostrar');
}

function ajustarMenu() {
    const itens = document.getElementById('itens');
    if (window.innerWidth >= 721) {
        itens.classList.remove('mostrar');
        itens.style.display = 'flex';
    } else {
        if (!itens.classList.contains('mostrar')) {
            itens.style.display = 'none';
        }
    }
}

// Fecha o menu ao clicar fora
document.addEventListener('click', function(event) {
    const itens = document.getElementById('itens');
    const burguer = document.getElementById('mburguer');
    
    if (!itens.contains(event.target) && event.target !== burguer) {
        itens.classList.remove('mostrar');
    }
});

// Ajusta o menu quando a janela é redimensionada
window.addEventListener('resize', ajustarMenu);

// Ajusta o menu quando a página é carregada
window.addEventListener('load', ajustarMenu);

// Seu código do carrossel mantido...
document.addEventListener('DOMContentLoaded', () => {
    // ... código existente do carrossel ...
});
//! Quero estudar mais este script e entender melhor a lógica dele 

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carrossel-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicadores = document.querySelectorAll('.indicador');
    let currentIndex = 0;
    let intervalo;

    function moverParaSlide(index) {
        if (index < 0) index = slides.length - 1;
        else if (index >= slides.length) index = 0;

        currentIndex = index;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        atualizarIndicadores();
    }

    function atualizarIndicadores() {
        indicadores.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
        });
    }

    function proximoSlide() {
        moverParaSlide(currentIndex + 1);
    }

    function iniciarAutoplay() {
        if (intervalo) clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 3000);
    }

    // Debounce para evitar cliques rápidos
    function debounce(func, timeout = 500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    prevBtn.addEventListener('click', debounce(() => {
        clearInterval(intervalo);
        moverParaSlide(currentIndex - 1);
        iniciarAutoplay();
    }));

    nextBtn.addEventListener('click', debounce(() => {
        clearInterval(intervalo);
        moverParaSlide(currentIndex + 1);
        iniciarAutoplay();
    }));

    indicadores.forEach((indicador, i) => {
        indicador.addEventListener('click', debounce(() => {
            clearInterval(intervalo);
            moverParaSlide(i);
            iniciarAutoplay();
        }));
    });

    // Inicia o carrossel
    iniciarAutoplay();

    // Pausa ao passar o mouse
    const carrossel = document.querySelector('.carrossel');
    carrossel.addEventListener('mouseenter', () => clearInterval(intervalo));
    carrossel.addEventListener('mouseleave', iniciarAutoplay);
});


