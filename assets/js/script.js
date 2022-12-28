const itemFinal = document.querySelector(".card-box")
const quantityFinal = document.querySelector("#quantity")
let html = ""
let quantity = 0
for (let item of propiedadesJSON) {
  quantity += 1
  html += `
    <div class="card mx-5 my-3" style="width: 19rem;">
    <img src="${item.src}" class="card-img-top" alt="..." width="100%" height="50%">
    <div class="card-body fs-5">
      <h5 class="card-title text-center mb-3">${item.name}</h5>
      <div class="flex-card d-flex justify-content-evenly">
        <p>Cuartos: ${item.rooms}</p>
        <p>Metros: ${item.m}</p>
      </div>
      <p class="card-text text-center">${item.description}</p>
      <a href="#" class="btn btn-dark d-flex justify-content-center">Ver Mas</a>
    </div>
    </div>
    `
}

itemFinal.innerHTML = html
quantityFinal.innerHTML = "Propiedades disponibles: " + quantity

const categoriaBoton = () => {
  let cantidadCuartos = document.querySelector("#cantidadCuartos").value
  let metrosDesde = document.querySelector("#metrosDesde").value
  let metrosHasta = document.querySelector("#metrosHasta").value
  const itemFinal2 = document.querySelector(".card-box")
  const quantityFinal2 = document.querySelector("#quantity")
  let html2 = ""
  let quantity2 = 0
  parseInt(cantidadCuartos, metrosDesde, metrosHasta)

  if (cantidadCuartos === "" || metrosDesde === "" || metrosHasta === "") {
    alert("que mira bobo, pone algo bobo, anda pa sha")
  }

  const databaseFilter = propiedadesJSON.filter(propiedadFilter => propiedadFilter.rooms == cantidadCuartos && propiedadFilter.m >= metrosDesde && propiedadFilter.m <= metrosHasta)

  for (data of databaseFilter) {
    quantity2 += 1
    html2 += `
    <div class="card mx-5 my-3" style="width: 19rem;">
    <img src="${data.src}" class="card-img-top" alt="..." width="100%" height="50%">
    <div class="card-body fs-5">
      <h5 class="card-title text-center mb-3">${data.name}</h5>
      <div class="flex-card d-flex justify-content-evenly">
        <p>Cuartos: ${data.rooms}</p>
        <p>Metros: ${data.m}</p>
      </div>
      <p class="card-text text-center">${data.description}</p>
      <a href="#" class="btn btn-dark d-flex justify-content-center">Ver Mas</a>
    </div>
    </div>
    `
  }
  quantityFinal2.innerHTML = "Propiedades disponibles: " + quantity2
  itemFinal2.innerHTML = html2
}

const quitarFiltros = () => { 
  itemFinal.innerHTML = html 
  quantityFinal.innerHTML = "Propiedades disponibles: " + quantity
  document.querySelectorAll(".input-form").forEach( inputs => {
    inputs.value = ""
  })
}