export const renderDetail = (img,beerName,description,fecha,precio) => {
    return `
    <div class="detailcontainer">
        <img src="${img}" alt="${beerName}">
        <h2>Descripción:</h2>
        <p>${description}</p>
        <h3>Fecha de elaboración:</h3>
        <p>${fecha}</p>
        <h3>Precio:</h3><p>${precio}€</p>
    </div>
      `
  }
  export default renderDetail();