function incrementarNumeroCircle({
    elementoId = 'contador-circle',
    inicio = 0,
    fin = 100,
    paso = 1,
    intervalo = 50,
    esperar = Promise.resolve()
} = {}) {
    let contador = inicio;
    const numero = document.getElementById(elementoId);
    const circulo = document.getElementById('progress-circle');

    if (!numero || !circulo) {
        console.warn('Elemento no encontrado');
        return;
    }

    // Calcular la circunferencia del círculo
    const radio = circulo.r.baseVal.value;
    const circunferencia = 2 * radio * Math.PI;

    // Configurar el círculo inicialmente
    circulo.style.strokeDasharray = `${circunferencia} ${circunferencia}`;

    // Actualiza el número y el círculo de progreso
    const mostrar = valor => {
        numero.textContent = `${valor}%`;
        const progreso = valor / fin;
        circulo.style.strokeDashoffset = circunferencia - (progreso * circunferencia);
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
            mostrar(contador);
            contador += paso;

            if (contador > fin) {
                clearInterval(timerUp);
            }
        }, intervalo);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Arranca cuando el círculo aparece en pantalla
    incrementarNumeroCircle({ esperar: cuandoAparezca(document.querySelector('.circle-container')) });
});
