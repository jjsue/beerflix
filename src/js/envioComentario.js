const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W'
export const envioComent = (beerId, comentario) => {
    axios({
        method: 'post',
        url: `https://beerflix-api.herokuapp.com/api/v1/beers/${beerId}/comment`,
        headers: {
            'X-API-KEY': API_KEY,
            accept: 'application/json'
          },
        data: {
          comment: `${comentario}`
        }
      })
      .then(function (response) {
        console.log(response);
        alert("Comentario enviado satisfactoriamente, acepta y se recargará la pagina para que puedas ver tu comentario.")
        window.location.reload(true); 
      })
      .catch(function (error) {
        if (error == "Error: Request failed with status code 403"){
          alert("No tienes permiso para comentar");
        }
        if (error == "Error: Request failed with status code 400"){
          alert("Error 400 Bad request");
        }
        if (error == "Error: Request failed with status code 404"){
         alert('Error 404, cerveza no encontrada');
        }
        if (error == "Error: Request failed with status code 500"){
          alert("Error interno del servidor, prueba mas tarde");
        }
      })
      .finally(function () {
      });
  }
export default envioComent;