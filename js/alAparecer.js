// Hace que las animaciones arranquen cuando el ejemplo aparece en pantalla,
// en lugar de apenas carga la página.
//
// - cuandoAparezca(elemento) devuelve una Promise que se resuelve la primera vez
//   que el elemento es visible. La usan los scripts de contadores y textos.
// - A cada contenedor .demo se le agrega la clase "visible" al aparecer; el CSS
//   mantiene pausadas las animaciones CSS hasta ese momento.

// Esta clase activa la pausa en el CSS. Se agrega desde JS para que, si el
// script no carga, las animaciones CSS funcionen igual que siempre.
document.documentElement.classList.add('animar-al-aparecer');

function cuandoAparezca(elemento, { umbral = 0.5 } = {}) {
    return new Promise(resolve => {
        // Navegadores sin IntersectionObserver: arrancamos de inmediato
        if (!elemento || !('IntersectionObserver' in window)) return resolve();

        const observador = new IntersectionObserver((entradas) => {
            if (entradas.some(entrada => entrada.isIntersecting)) {
                observador.disconnect();
                resolve();
            }
        }, { threshold: umbral });

        observador.observe(elemento);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.demo').forEach(demo => {
        cuandoAparezca(demo, { umbral: 0.3 }).then(() => demo.classList.add('visible'));
    });
});
