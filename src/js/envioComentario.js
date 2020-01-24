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
      });
  }
export default envioComent;
//https://beerflix-api.herokuapp.com/api/v1/beers/2/comment