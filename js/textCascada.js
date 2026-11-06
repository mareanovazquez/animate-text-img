// Letras en cascada: separa el texto en una <span> por letra y le asigna a cada
// una su posición (--i). El CSS usa esa posición para escalonar la animación,
// así cada letra entra un poco después que la anterior.
//
// Uso en el HTML:
//   <div class="texto-cascada" data-cascada>Letras en cascada</div>

function prepararCascada(elemento) {
    const texto = elemento.textContent.trim();

    // Texto completo para lectores de pantalla; las letras sueltas son decorativas
    const textoAccesible = document.createElement('span');
    textoAccesible.className = 'sr-only';
    textoAccesible.textContent = texto;

    const letras = document.createElement('span');
    letras.setAttribute('aria-hidden', 'true');

    Array.from(texto).forEach((caracter, i) => {
        const letra = document.createElement('span');
        letra.className = 'letra';
        letra.textContent = caracter;
        letra.style.setProperty('--i', i);
        letras.appendChild(letra);
    });

    elemento.replaceChildren(textoAccesible, letras);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-cascada]').forEach(prepararCascada);
});
