import {renderPrincipal} from './section.js';
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'

//Tomamos el section:
const beerSect = document.getElementById('beersection') //Cogemos todo el section
//Tomamos los valores de la busqueda (Si los hubiera):
var busqueda = sessionStorage.getItem('lastsearch');
var limite = sessionStorage.getItem('limit');
if(limite === null){ //Si no hay limite establecido colocamos uno de 10;
  limite = 10;
}
if(busqueda === null){//Si no hay nada en busqueda lo dejamos como una cadena vacía.
  busqueda = '';
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
      for (let i=0; i<10; i++){ //Aqui comenzamos a pintar propiamente dicho.
          if(response.data.beers[i] === undefined){ //Si la busqueda no devuelve nada no bloqueamos la ejecucion.
            break;
          }
          if (i === 0){
              beerSect.innerHTML = renderPrincipal(response.data.beers[i].image,response.data.beers[i].name, response.data.beers[i].description);
          }else{
              beerSect.innerHTML = beerSect.innerHTML + renderPrincipal(response.data.beers[i].image,response.data.beers[i].name, response.data.beers[i].description);
          }
      }
    })
    .catch(function (error) {
      console.log(error);
      return "Ha habido un error";
    })
    .finally(function () {
      if(beerSect.innerHTML === ''){
        beerSect.innerHTML = `<h1>Tu busqueda no ha generado resultados :(</h1>`
      }
    });
export default firstResponse;