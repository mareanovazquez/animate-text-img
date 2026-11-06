// Contador cuyo texto se va "llenando" de color al mismo ritmo que sube el número.
// El JS actualiza la variable CSS --progreso (0 a 100) y el CSS la usa para
// posicionar el gradiente de fondo, así el relleno siempre coincide con el número.
function incrementarNumeroUp({ elementoId = 'contador-img-text', inicio = 0, fin = 100, paso = 1, intervalo = 30, esperar = Promise.resolve() } = {}) {
    let contador = inicio;
    const numero = document.getElementById(elementoId);

    if (!numero) return console.warn(`Elemento con id "${elementoId}" no encontrado.`);

    const mostrar = valor => {
        numero.textContent = `${valor}%`;
        numero.style.setProperty('--progreso', valor);
    };

    // Si el usuario pidió reducir el movimiento, mostramos el valor final directamente
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        mostrar(fin);
        return;
    }

    mostrar(inicio);

    // La animación arranca cuando se cumple "esperar" (por ejemplo, al aparecer en pantalla)
    esperar.then(() => {
        const timerUp = setInterval(() => {
            mostrar(contador);     // Actualiza el número y el relleno juntos
            contador += paso;      // Incrementa el contador
            if (contador > fin) {  // Si llegó al final
                clearInterval(timerUp); // Detiene la animación
            }
        }, intervalo); // Cada 30ms por defecto
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Arranca cuando el contador aparece en pantalla
    incrementarNumeroUp({ esperar: cuandoAparezca(document.getElementById('contador-img-text')) });
});
