//import firstResponse from './API.js';

//console.log(firstResponse);
export const renderPrincipal = (sectionInFunction) => {
    sectionInFunction.innerHTML = `
    <article class="card" style="width: 20rem">
    <img src="./src/icon/example.jpg" alt="Beer">
    <h4 class="card-title">BeerName</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">LoremIpsum Dolor Sit Amet.<br>Buena cerveza.</p>
  </article>
  <article class="card" style="width: 20rem">
    <img src="./src/icon/example.jpg" alt="Beer">
    <h4 class="card-title">BeerName</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">LoremIpsum Dolor Sit Amet.<br>Buena cerveza.</p>
  </article>
  <article class="card" style="width: 20rem">
    <img src="./src/icon/example.jpg" alt="Beer">
    <h4 class="card-title">BeerName</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">LoremIpsum Dolor Sit Amet.<br>Buena cerveza.</p>
  </article>
  <article class="card" style="width: 20rem">
    <img src="./src/icon/example.jpg" alt="Beer">
    <h4 class="card-title">BeerName</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">LoremIpsum Dolor Sit Amet.<br>Buena cerveza.</p>
  </article>
  <article class="card" style="width: 20rem">
    <img src="./src/icon/example.jpg" alt="Beer">
    <h4 class="card-title">BeerName</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">LoremIpsum Dolor Sit Amet.<br>Buena cerveza.</p>
  </article>
  <article class="card" style="width: 20rem">
    <img src="./src/icon/example.jpg" alt="Beer">
    <h4 class="card-title">BeerName</h4>
    <h5 class="card-tittle">Descripción:</h5>
    <p class="card-body">LoremIpsum Dolor Sit Amet.<br>Buena cerveza.</p>
  </article>
    `
    console.log(sectionInFunction);
}
const API_KEY = 'NVJ0DBN-QEXM4CV-HF2D4EQ-DM2VN0W';
export default renderPrincipal;