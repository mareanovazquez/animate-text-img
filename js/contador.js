function incrementarNumero() {
    var contador = 0;
    var intervalo = setInterval(function () {
        document.getElementById('contador').textContent = contador + "%";
        contador += 1;
        if (contador > 75) {
            clearInterval(intervalo);
        }
    }, 50); // Intervalo de actualización en milisegundos
}

// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", function (event) {
    incrementarNumero();
});