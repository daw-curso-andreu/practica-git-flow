/*
 * Sección «Modificar atributos HTML»
 * Ejemplos de lectura y modificación de atributos desde JavaScript.
 */

// Ejemplo 1: cambiar el atributo src (y alt) de una imagen
const bombilla = document.getElementById('bombilla');

document.getElementById('btn-encender').addEventListener('click', () => {
  bombilla.src = 'img/bombilla-on.svg';
  bombilla.alt = 'Bombilla encendida';
});

document.getElementById('btn-apagar').addEventListener('click', () => {
  bombilla.src = 'img/bombilla-off.svg';
  bombilla.alt = 'Bombilla apagada';
});

// Ejemplo 2: atributo booleano disabled + setAttribute para el placeholder
const campo = document.getElementById('campo-nombre');

document.getElementById('btn-activar').addEventListener('click', () => {
  campo.disabled = !campo.disabled;
  campo.setAttribute('placeholder', campo.disabled ? 'Campo desactivado' : 'Escribe tu nombre');
  document.getElementById('estado-campo').innerHTML = campo.disabled;
});

// Ejemplo 3: getAttribute / setAttribute sobre el href de un enlace
const enlace = document.getElementById('enlace');
const destinos = ['https://developer.mozilla.org/es/', 'https://www.w3schools.com/js/'];

document.getElementById('btn-enlace').addEventListener('click', () => {
  const actual = enlace.getAttribute('href');
  const nuevo = actual === destinos[0] ? destinos[1] : destinos[0];
  enlace.setAttribute('href', nuevo);
  document.getElementById('destino').innerHTML = nuevo;
});
