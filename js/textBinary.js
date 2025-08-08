// Variables globales
let textBinaryElement;
let textoDefinitivo;

// Función global
function mostrarTextBinary(letraIndex) {
    if (!textBinaryElement || !textoDefinitivo) {
        console.error("Elementos no inicializados");
        return;
    }
    
    setTimeout(function () {
        let nuevoTexto = textBinaryElement.textContent.substring(0, letraIndex) + 
                        textoDefinitivo.charAt(letraIndex) + 
                        textBinaryElement.textContent.substring(letraIndex + 1);
        textBinaryElement.textContent = nuevoTexto;
        
        if (letraIndex < textoDefinitivo.length - 1) {
            mostrarTextBinary(letraIndex + 1);
        } else {
            textBinaryElement.textContent = textoDefinitivo;
        }
    }, 70);
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    textBinaryElement = document.getElementById('text-binary');
    textoDefinitivo = textBinaryElement.textContent;
    
    // Generar binario aleatorio
    let binaryAleatorio = Array(textoDefinitivo.length).fill('').map(() => 
        Math.random() < 0.5 ? '0' : '1'
    );
    textBinaryElement.textContent = binaryAleatorio.join('');
    
    // Iniciar animación
    mostrarTextBinary(0);
});