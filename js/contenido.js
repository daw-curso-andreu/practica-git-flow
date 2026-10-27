/*
 * Sección «Modificar contenido HTML»
 * Ejemplos de uso de la propiedad innerHTML.
 */

// Ejemplo 1: cambiar el texto de un párrafo al pulsar un botón
const botonCambiar = document.getElementById('btn-cambiar');

botonCambiar.addEventListener('click', () => {
  document.getElementById('demo').innerHTML = '¡Hola JavaScript!';
});

// Ejemplo 2: generar los <li> de una lista a partir de un array
const temas = ['El DOM', 'Seleccionar elementos', 'Eventos', 'innerHTML'];

document.getElementById('btn-lista').addEventListener('click', () => {
  // map() convierte cada tema en un <li> y join('') une todo en un único texto
  const html = temas.map((tema) => `<li>${tema}</li>`).join('');
  document.getElementById('lista-temas').innerHTML = html;
});
