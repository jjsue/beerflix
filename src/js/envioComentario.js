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
      })
      .catch(function (error) {
        console.log(error);
        return "Ha habido un error";
      })
      .finally(function () {
        alert("Comentario enviado satisfactoriamente, acepta y se recargará la pagina para que puedas ver tu comentario.")
        window.location.reload(true); 
      });
  }
export default envioComent;