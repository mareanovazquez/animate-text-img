// Animación "scramble": el texto aparece entre caracteres aleatorios que
// cambian constantemente hasta que cada letra se revela en su lugar.
//
// Uso declarativo en el HTML:
//   <div data-animar-texto data-caracteres="binario" data-orden="aleatorio">Hola</div>
//
// Uso desde JS:
//   animarTexto(elemento, { caracteres: '01', velocidad: 50, orden: 'secuencial' });

// Juegos de caracteres predefinidos (se pueden usar por nombre en data-caracteres)
const CONJUNTOS_CARACTERES = {
    // Todos los caracteres ASCII imprimibles (del 33 "!" al 126 "~")
    ascii: Array.from({ length: 126 - 33 + 1 }, (_, i) => String.fromCharCode(33 + i)).join(''),
    alfabeto: 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    binario: '01'
};

function animarTexto(elemento, { caracteres = CONJUNTOS_CARACTERES.ascii, velocidad = 50, orden = 'secuencial' } = {}) {
    if (!elemento) return console.warn('animarTexto: elemento no encontrado.');

    const textoFinal = elemento.textContent.trim();
    const letrasFinales = Array.from(textoFinal);
    const juego = Array.from(CONJUNTOS_CARACTERES[caracteres] || caracteres);
    const caracterAleatorio = () => juego[Math.floor(Math.random() * juego.length)];

    // Los lectores de pantalla leen solo el texto final (oculto visualmente);
    // la animación se marca como decorativa con aria-hidden.
    const textoAccesible = document.createElement('span');
    textoAccesible.className = 'sr-only';
    textoAccesible.textContent = textoFinal;

    const textoVisual = document.createElement('span');
    textoVisual.setAttribute('aria-hidden', 'true');

    elemento.replaceChildren(textoAccesible, textoVisual);

    // Si el usuario pidió reducir el movimiento, mostramos el texto final directamente
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        textoVisual.textContent = textoFinal;
        return;
    }

    // Los espacios se respetan desde el inicio para que se distingan las palabras
    const revelado = letrasFinales.map(letra => letra.trim() === '');

    // Orden en que se van revelando las letras (solo las que no son espacios)
    const pendientes = letrasFinales.map((_, i) => i).filter(i => !revelado[i]);
    if (orden === 'aleatorio') {
        for (let i = pendientes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pendientes[i], pendientes[j]] = [pendientes[j], pendientes[i]];
        }
    }

    const dibujar = () => {
        textoVisual.textContent = letrasFinales
            .map((letra, i) => (revelado[i] ? letra : caracterAleatorio()))
            .join('');
    };

    dibujar();

    const timer = setInterval(() => {
        // En cada paso se revela una letra y el resto sigue cambiando
        revelado[pendientes.shift()] = true;
        dibujar();
        if (pendientes.length === 0) clearInterval(timer);
    }, velocidad);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-animar-texto]').forEach(elemento => {
        const { caracteres, orden, velocidad } = elemento.dataset;
        animarTexto(elemento, {
            caracteres: caracteres || undefined,
            orden: orden || undefined,
            velocidad: velocidad ? Number(velocidad) : undefined
        });
    });
});
