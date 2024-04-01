document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento donde se mostrará el texto definitivo
    let textBinaryElement = document.getElementById('text-binary2');
    // Obtenemos el texto definitivo
    let textoDefinitivo = textBinaryElement.innerText;

    // Variable para controlar si un carácter ya ha sido revelado
    let caracterRevelado = Array(textoDefinitivo.length).fill(false);

    // Función para mostrar los caracteres de la palabra definitiva y seguir modificando ceros y unos
    function mostrarCaracteresYModificar(letraIndex) {
        setTimeout(function () {
            // Generamos una nueva combinación de ceros y unos aleatorios
            let binaryAleatorio = Array(textoDefinitivo.length).fill('').map(function () {
                return Math.random() < 0.5 ? '0' : '1'; // Generamos un 0 o un 1 aleatoriamente
            });

            // Actualizamos solo los caracteres que aún no han sido revelados
            let nuevoTexto = textBinaryElement.innerText.split('').map(function (caracter, index) {
                if (!caracterRevelado[index]) {
                    return binaryAleatorio[index];
                } else {
                    return caracter;
                }
            }).join('');
            textBinaryElement.innerText = nuevoTexto;

            // Si el carácter en la posición letraIndex aún no ha sido revelado, lo mostramos
            if (!caracterRevelado[letraIndex]) {
                textBinaryElement.innerText = textBinaryElement.innerText.substring(0, letraIndex) + textoDefinitivo.charAt(letraIndex) + textBinaryElement.innerText.substring(letraIndex + 1);
                caracterRevelado[letraIndex] = true; // Marcamos el carácter como revelado
            }

            // Llamamos recursivamente a la función para mostrar la siguiente letra
            if (letraIndex < textoDefinitivo.length - 1) {
                mostrarCaracteresYModificar(letraIndex + 1);
            }
        }, 50); // Tiempo de espera entre cada letra (en milisegundos)
    }

    // Llamamos a la función para iniciar la animación
    mostrarCaracteresYModificar(0);
});
