document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento donde se mostrará el texto definitivo
    let textRandomElement = document.getElementById('text-random2');

    // Obtenemos el texto definitivo
    let textoDefinitivo = textRandomElement.textContent;

    // Crear un array con las letras del alfabeto
    let alfabeto = 'abcdefghijklmñnopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    // Creamos una cadena de caracteres aleatorios del mismo tamaño que el texto definitivo
    let caracteresAleatorios = Array(textoDefinitivo.length).fill('').map(function () {
        // Generar un índice aleatorio dentro del rango del alfabeto
        let indice = Math.floor(Math.random() * alfabeto.length);
        // Obtener la letra correspondiente al índice aleatorio
        return alfabeto.charAt(indice);
    });
    
    // Mostramos los caracteres aleatorios antes del texto definitivo
    textRandomElement.textContent = caracteresAleatorios.join('');

    // Función para mostrar el texto definitivo letra por letra
    function mostrarTextoDefinitivoAlfabeto(letraIndex) {
        setTimeout(function () {
            // Obtenemos el texto actual
            let textoActual = textRandomElement.textContent;

            // Reemplazamos el caracter aleatorio en la posición letraIndex con el caracter correspondiente del texto definitivo
            let nuevoTexto = textoActual.substring(0, letraIndex) + textoDefinitivo.charAt(letraIndex) + textoActual.substring(letraIndex + 1);

            // Actualizamos el texto en el elemento
            textRandomElement.textContent = nuevoTexto;

            // Llamamos recursivamente a la función para mostrar la siguiente letra
            if (letraIndex < textoDefinitivo.length - 1) {
                mostrarTextoDefinitivoAlfabeto(letraIndex + 1);
            }
        }, 50); // Tiempo de espera entre cada letra (en milisegundos)
    }

    // Llamamos a la función para iniciar la animación
    mostrarTextoDefinitivoAlfabeto(0);
});
