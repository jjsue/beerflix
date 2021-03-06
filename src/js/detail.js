//import {renderPrincipal} from './section.js';
import {renderDetail, comentario, tituloComentario, formulario} from './section-detail.js';
import {envioComent} from './envioComentario.js';
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W';
const detailSect = document.getElementById('imgAndDesc');
const detailComment = document.getElementById('comments');
const pintarForm = document.getElementById('miComentario');
const title = document.getElementById('titulo');
let busquedaInt = '';
const busqueda = window.location.search;
//Sacar el numero de la busqueda:
for(let i = 0; i<busqueda.length; i++){
    if (isNaN(busqueda[i])){
        continue;
    }else{
        busquedaInt += busqueda[i];
    }
}
busquedaInt = (parseInt(busquedaInt, 10));
//Guardamos el ID para cuando lo necesitemos mas tarde:
sessionStorage.setItem('beerId', busquedaInt);

//Get para sacar las cerves
axios({
    method: 'get',
    url: `https://beerflix-api.herokuapp.com/api/v1/beers/${busquedaInt}`,
    //responseType: 'application/json',
    headers: {
              'X-API-KEY': API_KEY,
              accept: 'application/json'
            },
  })
    .then(function (response) {
      title.innerText = response.data.beer.name;
      detailSect.innerHTML = renderDetail(response.data.beer.image, response.data.beer.name, response.data.beer.description, response.data.beer.firstBrewed, response.data.beer.price);
      detailComment.innerHTML = tituloComentario("Comentarios:");
      if(response.data.beer.comments[0] === undefined) { //controlamos que haya o no comentarios.
        detailComment.innerHTML = detailComment.innerHTML + comentario("No hay ningún comentario, ¡Se el primero!");
      }else{
      for (let i = 0; i < response.data.beer.comments.length; i++){
          detailComment.innerHTML = detailComment.innerHTML + comentario(response.data.beer.comments[i].comment);
      }
    }
    pintarForm.innerHTML = formulario();
    })
    .catch(function (error) {
      if (error == "Error: Request failed with status code 403"){
        detailSect.innerHTML = '<h1>No tienes permiso para ver esta pagina</h1>'
      }
      if (error == "Error: Request failed with status code 400"){
        detailSect.innerHTML = '<h1>Error de parametros, prueba a volver a hacer la busqueda</h1>'
      }
      if (error == "Error: Request failed with status code 404"){
        detailSect.innerHTML = '<h1>Error 404, cerveza no encontrada</h1>'
      }
      if (error == "Error: Request failed with status code 500"){
        detailSect.innerHTML = '<h1>Error 500, error interno del servidor, prueba de nuevo mas tarde</h1>'
      }
    })
    .finally(function () {
      document.querySelector('#miComentario').addEventListener('submit', (evt) => {
        evt.preventDefault();
        envioComent(sessionStorage.getItem('beerId'), document.getElementById("myTextArea").value);
      })
    });