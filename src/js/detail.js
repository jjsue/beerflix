//import {renderPrincipal} from './section.js';
import {renderDetail} from './section-detail.js';
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'
const detailSect = document.getElementById('detailSection')
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
      console.log(response.data.beer)
      //title.innerText = response.data.beer.name;
      //detailSect.innerHTML = renderDetail(response.data.beer.image, response.data.beer.name, response.data.beer.description, response.data.beer.firstBrewed, response.data.beer.price);
      
    })
    .catch(function (error) {
      console.log(error);
      return "Ha habido un error";
    })
    .finally(function () {
        console.log("Finishhhh");
    });