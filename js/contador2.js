// Contador cuyo texto se va "llenando" de color al mismo ritmo que sube el número.
// El JS actualiza la variable CSS --progreso (0 a 100) y el CSS la usa para
// posicionar el gradiente de fondo, así el relleno siempre coincide con el número.
function incrementarNumeroUp({ elementoId = 'contador-img-text', inicio = 0, fin = 100, paso = 1, intervalo = 30 } = {}) {
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

    const timerUp = setInterval(() => {
        mostrar(contador);     // Actualiza el número y el relleno juntos
        contador += paso;      // Incrementa el contador
        if (contador > fin) {  // Si llegó al final
            clearInterval(timerUp); // Detiene la animación
        }
    }, intervalo); // Cada 30ms por defecto
}

// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", () => {
    incrementarNumeroUp();
});
