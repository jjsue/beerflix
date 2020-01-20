//import firstResponse from './API.js';

//console.log(firstResponse);
export const renderPrincipal = (img,beerName,description) => {
  return `
    <article class="card text-white bg-dark mb-3 card_modificada">
    <img class="card-img-top img-in-card" src="${img}" alt="Beer">
    <h4 class="card-title card-header">${beerName}</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">${description}</p>
  </article>
    `
}
export default renderPrincipal();