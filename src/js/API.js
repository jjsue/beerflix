

const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'
//const axios = require('axios').default;
//renderPrincipal(beerSect);
//axios api
// curl -X GET "https://beerflix-api.herokuapp.com/api/v1/beers?limit=5" -H  "accept: application/json" -H  "X-API-KEY: NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W"
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
    return response.data.beers;
  })
  .catch(function (error) {
    console.log(error);
    console.log("Ha habido un error");
  })
  .finally(function () {
    console.log('Finalizada llamada API');
  });

console.log(firstResponse[0]);