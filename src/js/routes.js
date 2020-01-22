//import renderPrincipal from './section.js';
import firstResponse from './API.js'; //Solo con esto ya ejecuta
document.getElementById("miFormulario").addEventListener("submit", guardadoSession);

function guardadoSession() {
    //Extraer los valores y cargarlos a la session storage.
    sessionStorage.setItem('lastsearch', document.getElementById("busqueda").value);
    sessionStorage.setItem('limit', document.getElementById("limite").value);
  }
