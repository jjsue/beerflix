import renderPrincipal from './section.js';
const beerSect = document.getElementById('beersection') //Cogemos todo el section
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'
//const axios = require('axios').default;
//renderPrincipal(beerSect);
//axios api
// curl -X GET "https://beerflix-api.herokuapp.com/api/v1/beers?limit=5" -H  "accept: application/json" -H  "X-API-KEY: NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W"
axios({
  method: 'get',
  url: 'https://beerflix-api.herokuapp.com/api/v1/beers',
  //responseType: 'application/json',
   headers: {
             'X-API-KEY': API_KEY,
             accept: 'application/json'
           },
})
  .then(function (response) {
    console.log(response);
  });