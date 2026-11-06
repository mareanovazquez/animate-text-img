# animate-text-img

Este proyecto contiene una colección de animaciones para texto utilizando HTML, CSS y JavaScript. El objetivo es mostrar diferentes efectos visuales aplicados a textos, como contadores animados, textos con imágenes de fondo, animaciones de texto con caracteres aleatorios y efectos binarios.

## Estructura del proyecto

- **index.html**: Página principal que muestra todos los ejemplos de animaciones.
- **css/style.css**: Estilos y animaciones CSS para los textos e imágenes de fondo.
- **img/**: Imágenes utilizadas como fondo en los textos animados.
- **js/**: Scripts JavaScript que implementan las animaciones dinámicas. `alAparecer.js` debe cargarse antes que los demás.

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
Contador animado cuyo texto se va llenando de color al mismo ritmo que sube el número: cuando marca 50%, el texto está pintado justo hasta la mitad.
- El JS actualiza la variable CSS `--progreso` (de 0 a 100) y el CSS la usa para posicionar el gradiente de fondo.
- Implementación: [`js/contador2.js`](js/contador2.js)

### 5. Contador con Círculo de Progreso
Contador animado acompañado de un círculo SVG que se va completando a medida que el número avanza hasta el valor final.
- El progreso del círculo se calcula a partir de su circunferencia, usando `stroke-dasharray` y `stroke-dashoffset`.
- La función `incrementarNumeroCircle()` acepta opciones configurables: `elementoId`, `inicio`, `fin`, `paso` e `intervalo`.
- Implementación: [`js/contador3.js`](js/contador3.js)

### 6. Textos Random (scramble)
El texto aparece entre caracteres aleatorios que cambian constantemente, y cada letra se va revelando hasta mostrar el mensaje final. Los espacios se respetan desde el inicio para que se distingan las palabras, y se usa una fuente monoespaciada (Fira Mono) para que el texto no cambie de ancho durante la animación.

Todas las variantes usan la misma función `animarTexto()`:
- **Caracteres**: con todos los caracteres ASCII imprimibles.
- **Alfabeto**: solo con letras (incluida la ñ).
- **Binario**: solo con 0 y 1.
- **Binario en orden aleatorio**: las letras se revelan en orden aleatorio en lugar de izquierda a derecha.

Para agregar una variante nueva alcanza con un atributo en el HTML:

```html
<div class="texto-scramble" data-animar-texto data-caracteres="binario" data-orden="aleatorio">Hola mundo</div>
```

- `data-caracteres`: `ascii`, `alfabeto`, `binario` o cualquier cadena de caracteres propia (por ejemplo `"★☆"`).
- `data-orden`: `secuencial` (por defecto) o `aleatorio`.
- `data-velocidad`: milisegundos entre cada letra revelada (50 por defecto).
- Implementación: [`js/textScramble.js`](js/textScramble.js)

### 7. Ola de Colores
Un gradiente de varios colores recorre el texto en loop. El gradiente repite sus colores en cada mitad, así el ciclo no tiene saltos.
- Implementación: solo CSS (`.texto-gradiente`)

### 8. Brillo que Pasa
Una franja de luz cruza el texto cada pocos segundos, como un reflejo sobre metal.
- Implementación: solo CSS (`.texto-brillo`)

### 9. Máquina de Escribir
El texto aparece letra por letra con un cursor que parpadea. Usa `steps()` y la unidad `ch` de la fuente monoespaciada.
- En el HTML se indica la cantidad de caracteres con la variable `--caracteres`: `<div class="texto-maquina" style="--caracteres: 25">...</div>`
- Implementación: solo CSS (`.texto-maquina`)

### 10. Texto Neón
Brillo de neón hecho con varias capas de `text-shadow`, que titila de vez en cuando como un cartel que falla.
- Implementación: solo CSS (`.texto-neon`)

### 11. Glitch
El texto se duplica en rojo y cian, con desplazamientos y cortes horizontales durante un instante de cada ciclo.
- Las copias se generan con `::before` y `::after` a partir del atributo `data-texto`.
- Implementación: solo CSS (`.texto-glitch`)

### 12. Subrayado Animado
Una línea se dibuja debajo de los links al pasar el mouse o al enfocarlos con el teclado.
- Implementación: solo CSS (`.menu-subrayado`)

### 13. Letras en Cascada
Cada letra entra por separado cayendo con un pequeño rebote, un poco después que la anterior.
- El JS separa el texto en una `<span>` por letra y el CSS escalona la animación con la variable `--i`.
- Uso: `<div class="texto-cascada" data-cascada>Letras en cascada</div>`
- Implementación: [`js/textCascada.js`](js/textCascada.js)

### 14. Palabras que Rotan
La última palabra de una frase va cambiando cada pocos segundos, con el efecto scramble en cada cambio.
- Uso: `Hacemos sitios <span data-palabras-rotativas="rápidos, modernos, accesibles">rápidos</span>`
- Atributos opcionales: `data-pausa` (milisegundos que queda cada palabra, 2000 por defecto) y `data-caracteres`.
- Implementación: [`js/palabrasRotativas.js`](js/palabrasRotativas.js)

## Animaciones al aparecer en pantalla

Todas las animaciones arrancan cuando el ejemplo aparece en pantalla, no apenas carga la página, para que se vean aunque estén más abajo.
- [`js/alAparecer.js`](js/alAparecer.js) usa `IntersectionObserver`. Agrega la clase `visible` a cada contenedor `.demo` al aparecer, y mientras tanto el CSS deja pausadas las animaciones CSS.
- También ofrece `cuandoAparezca(elemento)`, que devuelve una Promise. La usan los contadores y los textos random a través de su opción `esperar`.
- Si el navegador no soporta `IntersectionObserver`, las animaciones arrancan de inmediato.

## Accesibilidad

- Los textos random, las letras en cascada, las palabras que rotan y el glitch muestran la animación como decorativa (`aria-hidden`) y dejan el texto final disponible para lectores de pantalla.
- Si el sistema tiene activada la opción de reducir el movimiento (`prefers-reduced-motion`), las animaciones se desactivan y cada ejemplo se muestra directamente en su estado final.

## Cómo usar

1. Clona el repositorio.
2. Abre `index.html` en tu navegador.
3. Explora los diferentes ejemplos y efectos de animación de texto.

## Créditos

Desarrollado por [Mariano Vazquez]
