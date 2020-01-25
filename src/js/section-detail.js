export const renderDetail = (img,beerName,description,fecha,precio) => {
    return `
      <div id="imgContainer"><img src="${img}" alt="${beerName}" class="img-detail"></div>
      <div id="detailContainer" class="align-self-center bg-dark text-white card mx-3 my-3 px-3 py-3 text-white bg-dark">
          <h2>Descripción:</h2>
          <p>${description}</p>
          <h3>Fecha de elaboración:</h3>
          <p>${fecha}</p>
          <h3>Precio:</h3><p>${precio}€</p>
      </div>
      `
  }
export const comentario = (comment) => {
    return `
    <div class="card mx-3 my-3 px-3 py-3 text-white bg-dark"><p class="card-text">${comment}</p></div>
    `;
  }
export const tituloComentario = (titulo) => {
    return `
        <h4 class="ml-3">${titulo}</h4>
    `;
}
export const formulario = () => {
    return `
    <h5 class="ml-3">Envianos tu comentario:</h5>
    <div class="form-group d-flex">
        <textarea id="myTextArea" name="comment" class="form-control mx-3 my-3"></textarea>
        <input id="commentSubmit" class="btn btn-primary btn-lg mx-3 my-3" type="submit" name="commentSubmitName" value="Enviar">
    </div>
  `
}
export default {renderDetail, comentario, tituloComentario, formulario};