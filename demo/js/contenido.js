/*
 * Sección «Modificar contenido HTML»
 * Ejemplos de uso de la propiedad innerHTML.
 */

// Ejemplo 1: cambiar el texto de un párrafo al pulsar un botón
const botonCambiar = document.getElementById('btn-cambiar');

botonCambiar.addEventListener('click', () => {
  document.getElementById('demo').innerHTML = '¡Hola JavaScript!';
});

// Mejora (hotfix v1.0.1): permite volver al texto original para repetir el ejemplo
const textoOriginal = document.getElementById('demo').innerHTML;

document.getElementById('btn-restablecer').addEventListener('click', () => {
  document.getElementById('demo').innerHTML = textoOriginal;
});

// Ejemplo 2: generar los <li> de una lista a partir de un array
const temas = ['El DOM', 'Seleccionar elementos', 'Eventos', 'innerHTML'];

document.getElementById('btn-lista').addEventListener('click', () => {
  // map() convierte cada tema en un <li> y join('') une todo en un único texto
  const html = temas.map((tema) => `<li>${tema}</li>`).join('');
  document.getElementById('lista-temas').innerHTML = html;
});

// Ejemplo 3 (hotfix v1.0.1): diferencia entre innerHTML y textContent
const entrada = document.getElementById('entrada-usuario');
const resultado = document.getElementById('resultado');

// innerHTML interpreta las etiquetas HTML que escriba el usuario
document.getElementById('btn-inner').addEventListener('click', () => {
  resultado.innerHTML = entrada.value;
});

// textContent las muestra como texto plano (opción segura frente a XSS)
document.getElementById('btn-text').addEventListener('click', () => {
  resultado.textContent = entrada.value;
});
