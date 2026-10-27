/*
 * Sección «Modificar estilos CSS»
 * Ejemplos de modificación de estilos con la propiedad style y con classList.
 */

// Ejemplo 1: cambiar el tamaño de letra de un párrafo
// (font-size en CSS se escribe fontSize en JavaScript)
const texto = document.getElementById('texto-tamano');

document.getElementById('btn-tamano').addEventListener('click', () => {
  texto.style.fontSize = '35px';
});

// Ejemplo 2: cambiar colores en tiempo real con <input type="color">
const caja = document.getElementById('caja-color');

document.getElementById('color-fondo').addEventListener('input', (evento) => {
  caja.style.backgroundColor = evento.target.value; // background-color
});

document.getElementById('color-texto').addEventListener('input', (evento) => {
  caja.style.color = evento.target.value; // color
});

// Ejemplo 3: mostrar / ocultar un elemento con la propiedad display
const aviso = document.getElementById('texto-visible');

document.getElementById('btn-ocultar').addEventListener('click', () => {
  aviso.style.display = 'none'; // desaparece y deja de ocupar espacio
});

document.getElementById('btn-mostrar').addEventListener('click', () => {
  aviso.style.display = 'block'; // vuelve a mostrarse
});

// Ejemplo 4: aplicar varios estilos a la vez activando/desactivando una clase
document.getElementById('btn-tema').addEventListener('click', () => {
  document.getElementById('zona-tema').classList.toggle('tema-oscuro');
});
