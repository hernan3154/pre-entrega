
var boton = document.getElementById("boton");



function apiProducts() {
  const apiUrl = 'https://dummyjson.com/products/category/smartphones'; // URL de la API predeterminada
  const limit = 30; // Límite predeterminado de productos
var cardContainer = document.getElementById("card-container");

fetch(`${apiUrl}?limit=${limit}`)
.then(res => res.json())
.then(productos => {
  // Recorrer los productos y crear tarjetas con el forEach
  productos.products.forEach(producto => {
    //creamos el div
  var cardDiv = document.createElement("div");
  cardDiv.className = "col-md-4";

  cardDiv.innerHTML = `
  <div class="card" id="card">
         <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
          <div class="card-body">
            <h5 class="card-title"> ${producto.title}</h5>
            <h6 class="card-price">Precio: $ ${producto.price}</h6>
            <p class="descripcion"> Decripcion : ${
              producto.description.length > 150 
                ? producto.description.substring(0, 100) + "..." 
                : producto.description
            }  </p>

    <!-- Contador -->
    <div class="contador">
      <button class="btn btn-secondary btn-decrementar" data-id="${producto.id}">-</button>
      <span class="cantidad" id="cantidad-${producto.id}">0</span>
      <button class="btn btn-secondary btn-incrementar" data-id="${producto.id}">+</button>
    </div>

            <a href="#" class="btn btn-primary" id='boton'>Agregar al Carrito</a>
          </div>
        </div>
        
        `;
  console.log(cardDiv)
  cardContainer.appendChild(cardDiv)
  })
})
.catch(error => console.error("Error al cargar los productos:", error));
}
apiProducts();
// Agregar evento de click al botón
// Event delegation para manejar clics en botones de las tarjetas
document.addEventListener("click", (event) => {
  // Incrementar cantidad
  if (event.target.classList.contains("btn-incrementar")) {
    const id = event.target.getAttribute("data-id");
    const cantidadElement = document.getElementById(`cantidad-${id}`);
    let cantidad = parseInt(cantidadElement.textContent);
    cantidad++;
    cantidadElement.textContent = cantidad;
  }

  // Decrementar cantidad
  if (event.target.classList.contains("btn-decrementar")) {
    const id = event.target.getAttribute("data-id");
    const cantidadElement = document.getElementById(`cantidad-${id}`);
    let cantidad = parseInt(cantidadElement.textContent);
    if (cantidad > 0) {
      cantidad--;
      cantidadElement.textContent = cantidad;
    }
}
});;
// local storage 





//ciclo for 

//for (var i = 1; i <= 18; i++) {

 
 
    

  
//};
