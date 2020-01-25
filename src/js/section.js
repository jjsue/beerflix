export const renderPrincipal = (img,beerName,description,beerId) => {
  return `
    <article class="card text-white bg-dark mb-3 card_modificada">
      <img class="card-img-top img-detail" src="${img}" alt="Beer">
      <a class="card-title card-header" href="./detail.html?id=${beerId}"><h4>${beerName}</h4></a>
      <h5 class="card-tittle ml-3">Descripción:</h5>
      <p class="card-body">${description}</p>
    </article>
    `
}
export default renderPrincipal();