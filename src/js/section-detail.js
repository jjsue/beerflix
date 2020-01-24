export const renderDetail = (img,beerName,description,fecha,precio) => {
    return `
        <img src="${img}" alt="${beerName}">
        <h2>Descripción:</h2>
        <p>${description}</p>
        <h3>Fecha de elaboración:</h3>
        <p>${fecha}</p>
        <h3>Precio:</h3><p>${precio}€</p>
      `
  }
export const comentario = (comment) => {
    return `
        <p>${comment}</p>
    `;
  }
export const tituloComentario = (titulo) => {
    return `
        <h4>${titulo}</h4>
    `;
}
export const formulario = () => {
    return `
    <form action="#" id="miComentario" method="post">
    <h5>Envianos tu comentario:</h5>
    <textarea id="myTextArea" name="comment" class="form-control"></textarea>
    <input id="commentSubmit" class="btn btn-primary btn-lg" type="submit" name="commentSubmitName" value="Enviar">
  </form>
  `
}
export default {renderDetail, comentario, tituloComentario, formulario};