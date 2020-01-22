const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'
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
        console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      return "Ha habido un error";
    })
    .finally(function () {
        console.log("Finishhhh");
    });