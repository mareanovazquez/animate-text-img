function incrementarNumeroUp({elementoId = 'contador-img-text', inicio = 0, fin = 100, paso = 1, intervalo = 30} = { }) {
    let contador = inicio;
    let numero = document.getElementById(elementoId);
    const timerUp = setInterval(() => {
        numero.textContent = `${contador}%`; // Actualiza el DOM
        contador += paso; // Incrementa el contador
        if (contador > fin) { // Si llegó al final
            clearInterval(timerUp); // Detiene la animación
        }
    }, intervalo); // Cada 30ms por defecto
}
 
// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", function () {
    incrementarNumeroUp();
});