import {renderPrincipal} from './section.js';
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'

//Tomamos el section:
const beerSect = document.getElementById('beersection') //Cogemos todo el section
//Pintamos cuando carga la web:
const firstResponse = axios({
  method: 'get',
  url: 'https://beerflix-api.herokuapp.com/api/v1/beers?limit=10',
  //responseType: 'application/json',
   headers: {
             'X-API-KEY': API_KEY,
             accept: 'application/json'
           },
})
  .then(function (response) {
    //console.log(response.data.beers[0]);
    for (let i=0; i<10; i++){ //Aqui comenzamos a pintar propiamente dicho.
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
    console.log('Finalizada llamada API');
  });
