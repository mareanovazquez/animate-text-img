# animate-text-img

Este proyecto contiene una colección de animaciones para texto utilizando HTML, CSS y JavaScript. El objetivo es mostrar diferentes efectos visuales aplicados a textos, como contadores animados, textos con imágenes de fondo, animaciones de texto con caracteres aleatorios y efectos binarios.

## Estructura del proyecto

- **index.html**: Página principal que muestra todos los ejemplos de animaciones.
- **css/style.css**: Estilos y animaciones CSS para los textos e imágenes de fondo.
- **img/**: Imágenes utilizadas como fondo en los textos animados.
- **js/**: Scripts JavaScript que implementan las animaciones dinámicas.

## Animaciones incluidas

### 1. Contador Básico
Animación de incremento de un número hasta un valor objetivo, mostrando el porcentaje.
- Implementación: [`js/contador.js`](js/contador.js)

### 2. Imagen en Texto
Texto que utiliza una imagen de fondo, logrando un efecto visual llamativo solo con CSS.

### 3. Animaciones de Imagen en Texto
Variantes de animaciones donde el fondo del texto se va "cargando" con diferentes imágenes o gradientes.
- Implementación: Solo CSS en [`css/style.css`](css/style.css)

### 4. Contador con Imagen de Fondo
Contador animado que utiliza un gradiente como fondo del texto.
- Implementación: [`js/contador2.js`](js/contador2.js)

### 5. Contador con Círculo de Progreso
Contador animado acompañado de un círculo SVG que se va completando a medida que el número avanza hasta el valor final.
- El progreso del círculo se calcula a partir de su circunferencia, usando `stroke-dasharray` y `stroke-dashoffset`.
- La función `incrementarNumeroCircle()` acepta opciones configurables: `elementoId`, `inicio`, `fin`, `paso` e `intervalo`.
- Implementación: [`js/contador3.js`](js/contador3.js)

### 6. Texto Random Caracteres
Animación donde el texto aparece reemplazando caracteres aleatorios hasta mostrar el mensaje final.
- Implementación: [`js/textRandom.js`](js/textRandom.js)

### 7. Texto Random Alfabeto
Similar al anterior, pero los caracteres aleatorios pertenecen solo al alfabeto.
- Implementación: [`js/textRandom2.js`](js/textRandom2.js)

### 8. Texto Random Binario
El texto aparece reemplazando caracteres por 0 y 1 hasta revelar el mensaje final.
- Implementación: [`js/textBinary.js`](js/textBinary.js)

### 9. Texto Random Binario Mejorado
Versión mejorada donde los caracteres revelados permanecen fijos y el resto sigue cambiando.
- Implementación: [`js/textBinary2.js`](js/textBinary2.js)

## Cómo usar

1. Clona el repositorio.
2. Abre `index.html` en tu navegador.
3. Explora los diferentes ejemplos y efectos de animación de texto.

## Créditos

Desarrollado por [Mariano Vazquez]
