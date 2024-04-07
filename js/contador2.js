function incrementarNumero2() {
    let contador = 0;
    let numero = document.getElementById('contador-img-text');
    let intervalo = setInterval(function () {
        numero.textContent = contador + "%";
        contador += 1;
        if (contador > 100) {
            clearInterval(intervalo);
        }
    }, 30); // Intervalo de actualización en milisegundos
}

// Llamar a la función cuando se carga el documento
document.addEventListener("DOMContentLoaded", function () {
    incrementarNumero2();
});