document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento donde se mostrará el texto definitivo
    var textRandomElement = document.getElementById('text-random');
    // Obtenemos el texto definitivo
    var textoDefinitivo = textRandomElement.innerText;
    // Creamos una cadena de caracteres aleatorios del mismo tamaño que el texto definitivo
    var caracteresAleatorios = Array(textoDefinitivo.length).fill('').map(function () {
        return String.fromCharCode(Math.random() * (126 - 33) + 33);
    });

    // Mostramos los caracteres aleatorios antes del texto definitivo
    textRandomElement.innerText = caracteresAleatorios.join('');

    // Función para mostrar el texto definitivo letra por letra
    function mostrarTextoDefinitivo(letraIndex) {
        setTimeout(function () {
            // Obtenemos el texto actual
            var textoActual = textRandomElement.innerText;
            // Reemplazamos el caracter aleatorio en la posición letraIndex con el caracter correspondiente del texto definitivo
            var nuevoTexto = textoActual.substring(0, letraIndex) + textoDefinitivo.charAt(letraIndex) + textoActual.substring(letraIndex + 1);
            // Actualizamos el texto en el elemento
            textRandomElement.innerText = nuevoTexto;
            // Llamamos recursivamente a la función para mostrar la siguiente letra
            if (letraIndex < textoDefinitivo.length - 1) {
                mostrarTextoDefinitivo(letraIndex + 1);
            }
        }, 50); // Tiempo de espera entre cada letra (en milisegundos)
    }

    // Llamamos a la función para iniciar la animación
    mostrarTextoDefinitivo(0);
});
