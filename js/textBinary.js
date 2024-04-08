document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento donde se mostrará el texto definitivo
    let textBinaryElement = document.getElementById('text-binary');
    // Obtenemos el texto definitivo
    let textoDefinitivo = textBinaryElement.textContent;

    // Función para mostrar el texto definitivo letra por letra
    function mostrarTextBinary(letraIndex) {
        setTimeout(function () {
            // Generamos una nueva combinación de ceros y unos aleatorios
            let binaryAleatorio = Array(textoDefinitivo.length).fill('').map(function () {
                return Math.random() < 0.5 ? '0' : '1'; // Generamos un 0 o un 1 aleatoriamente
            });
         
            // Mostramos los ceros y unos aleatorios antes del texto definitivo
            textBinaryElement.textContent = binaryAleatorio.join('');

                // Actualizamos el texto en el elemento con el carácter correspondiente del texto definitivo
            let nuevoTexto = textBinaryElement.textContent.substring(0, letraIndex) + textoDefinitivo.charAt(letraIndex) + textBinaryElement.textContent.substring(letraIndex + 1);
            textBinaryElement.textContent = nuevoTexto;
            
            // Llamamos recursivamente a la función para mostrar la siguiente letra
            if (letraIndex < textoDefinitivo.length - 1) {
                mostrarTextBinary(letraIndex + 1);
            } else {
                // Cuando se haya mostrado el último carácter, mostramos el texto definitivo completo
                textBinaryElement.textContent = textoDefinitivo;
            }
        }, 70); // Tiempo de espera entre cada letra (en milisegundos)
    }

    // Llamamos a la función para iniciar la animación
    mostrarTextBinary(0);
});
