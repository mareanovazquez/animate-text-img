// Palabras que rotan: la última palabra de una frase va cambiando cada tantos
// segundos, con la animación "scramble" de textScramble.js en cada cambio.
//
// Uso en el HTML:
//   Hacemos sitios <span data-palabras-rotativas="rápidos, modernos, accesibles">rápidos</span>
//
// Atributos opcionales:
//   data-pausa="2000"          milisegundos que cada palabra queda quieta
//   data-caracteres="alfabeto" caracteres para el scramble (ver textScramble.js)

const esperarMs = ms => new Promise(resolve => setTimeout(resolve, ms));

async function rotarPalabras(elemento, { palabras, pausa = 2000, caracteres = 'alfabeto' } = {}) {
    if (!elemento || !palabras || palabras.length === 0) return;

    // La primera palabra aparece con scramble cuando el elemento entra en pantalla
    await animarTexto(elemento, { texto: palabras[0], caracteres, esperar: cuandoAparezca(elemento) });

    // Con movimiento reducido, la frase queda fija en la primera palabra
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    for (let i = 1; ; i = (i + 1) % palabras.length) {
        await esperarMs(pausa);
        await animarTexto(elemento, { texto: palabras[i], caracteres });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-palabras-rotativas]').forEach(elemento => {
        const { palabrasRotativas, pausa, caracteres } = elemento.dataset;
        rotarPalabras(elemento, {
            palabras: palabrasRotativas.split(',').map(p => p.trim()).filter(Boolean),
            pausa: pausa ? Number(pausa) : undefined,
            caracteres: caracteres || undefined
        });
    });
});
