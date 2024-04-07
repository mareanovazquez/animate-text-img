function incrementarNumero() {
    let contador = 0;
    let numero = document.getElementById('contador');
    
    let intervalo = setInterval(function () {
        numero.textContent = contador + "%";
        contador += 1;
        if (contador > 75) {
            clearInterval(intervalo);
        }
    }, 50); // Intervalo de actualización en milisegundos
}

// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", function () {
    incrementarNumero();
});