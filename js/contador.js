function incrementarNumero({ elementoId = 'contador', inicio = 0, fin = 75, paso = 1, intervalo = 50 } = {}) {
    let contador = inicio;
    const numero = document.getElementById(elementoId);

    if (!numero) return console.warn(`Elemento con id "${elementoId}" no encontrado.`);

    // Si el usuario pidió reducir el movimiento, mostramos el valor final directamente
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        numero.textContent = `${fin}%`;
        return;
    }

    const timer = setInterval(() => {
        numero.textContent = `${contador}%`;  // Actualiza el DOM
        contador += paso;                     // Incrementa el contador
        if (contador > fin) {                 // Si llegó al final
            clearInterval(timer);             // Detiene la animación
        }
    }, intervalo); // Cada 50ms por defecto
}

document.addEventListener("DOMContentLoaded", () => {
    incrementarNumero(); // Podés pasarle parámetros si querés cambiar el comportamiento
});
