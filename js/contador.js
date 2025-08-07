
function incrementarNumero({ elementoId = 'contador', inicio = 0, fin = 75, paso = 1, intervalo = 50 } = {}) {
    let contador = inicio;
    const numero = document.getElementById(elementoId);

    if (!numero) return console.warn(`Elemento con id "${elementoId}" no encontrado.`);

    const timer = setInterval(() => {
        numero.textContent = `${contador}%`;
        contador += paso;
        if (contador > fin) {
            clearInterval(timer);
        }
    }, intervalo);
}

document.addEventListener("DOMContentLoaded", () => {
    incrementarNumero(); // Podés pasarle parámetros si querés cambiar el comportamiento
});

