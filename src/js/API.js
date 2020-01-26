import {renderPrincipal} from './section.js';
import {dateFilter} from './order.js';
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'

//Tomamos el section:
const beerSect = document.getElementById('beersection') //Cogemos todo el section
//Tomamos los valores de la busqueda (Si los hubiera):
var busqueda = sessionStorage.getItem('lastsearch');
var limite = sessionStorage.getItem('limit');
var yearFilter = sessionStorage.getItem('year');
if(limite === null){ //Si no hay limite establecido colocamos uno de 10;
  limite = 10;
}
if(busqueda === null){//Si no hay nada en busqueda lo dejamos como una cadena vacía.
  busqueda = '';
}
if(yearFilter === null){
  yearFilter = '*';
}
//Pintamos cuando carga la web:
  const firstResponse = axios({
    method: 'get',
    url: `https://beerflix-api.herokuapp.com/api/v1/beers?search=${busqueda}&limit=${limite}`,
    //responseType: 'application/json',
    headers: {
              'X-API-KEY': API_KEY,
              accept: 'application/json'
            },
  })
    .then(function (response) {
      if(response.data.beers === undefined){ //Si la busqueda no devuelve nada no bloqueamos la ejecucion.
      console.log(".");
      } else {
        let filterResponse = dateFilter(response.data.beers, yearFilter);
        for (let i=0; i<10; i++){ //Aqui comenzamos a pintar propiamente dicho.
            if (filterResponse[i] == undefined){
              break; //Cortamos la ejecucion si el filtro no devuelve nada.
            }
            if (i === 0){
                beerSect.innerHTML = renderPrincipal(filterResponse[i].image, filterResponse[i].name, filterResponse[i].description, filterResponse[i].beerId);
            }else{
                beerSect.innerHTML = beerSect.innerHTML + renderPrincipal(filterResponse[i].image, filterResponse[i].name, filterResponse[i].description, filterResponse[i].beerId);
            }
        }
    }
    })
    .catch(function (error) {
      if (error == "Error: Request failed with status code 403"){
        beerSect.innerHTML = '<h1>No tienes permiso para ver esta pagina</h1>'
      }
      if (error == "Error: Request failed with status code 400"){
        beerSect.innerHTML = '<h1>Error de parametros, prueba a volver a hacer la busqueda</h1>'
      }
    })
    .finally(function () {
      if(beerSect.innerHTML === ''){
        beerSect.innerHTML = `<h1>Tu busqueda no ha generado resultados :(</h1>`
      }
    });
export default firstResponse;