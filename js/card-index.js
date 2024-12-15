document.addEventListener("DOMContentLoaded", () => {
    // Función para obtener productos desde la API
    function apiProductsIndex() {
      const apiUrl = 'https://dummyjson.com/products'; // URL de la API
      const limit = 4; // Límite de productos
      const card = document.getElementById("producto-index");
      if (!card) {
        console.error('No se encontró el contenedor con id "producto".');
        return; // Terminar la función si el contenedor no existe
      }
  
      fetch(`${apiUrl}?limit=${limit}`)
        .then(res => res.json())
        .then(productos => {
          if (!productos.products || productos.products.length === 0) {
            throw new Error("No se encontraron productos en la API.");
          }
  
          card.innerHTML = ''; // Limpia el contenedor antes de añadir nuevos productos
  
          // Recorrer los productos y crear tarjetas
          productos.products.forEach(producto => {
            const cardDiv = document.createElement("div");
            cardDiv.className = "col-md-4";
  
            cardDiv.innerHTML = `
              <div class="card" id="card" style="background-color: #e4e4e4;">
                <img src="${producto.thumbnail}" id="imagen" class="card-img-top imagen" alt="${producto.title}">
                <div class="card-body">
                  <h5 class="card-title" id="titulo">${producto.title}</h5>
                  <h6 class="card-price" id="precio">Precio: $${producto.price}</h6>
                  <p class="descripcion" id="descripcion">${
                    producto.description.length > 50
                      ? producto.description.substring(0, 50) + "..."
                      : producto.description
                  }</p>
                  <a href="productos.html"><button class="btn btn-primary boton-carrito">comprar</button></a>
                </div>
              </div>
            `;
            card.appendChild(cardDiv);
          });
        })
        .catch(error => {
          console.error("Error al cargar los productos:", error);
          alert("Hubo un error al cargar los productos. Inténtalo más tarde.");
        
        });
    }
    apiProductsIndex()
});


//main1
document.addEventListener("DOMContentLoaded", () => {
    // Función para obtener productos desde la API
    function apiProductsIndex() {
      const apiUrl ='https://dummyjson.com/products/category/smartphones'; // URL de la API
      const limit = 4; // Límite de productos
      const card = document.getElementById("section");
      if (!card) {
        console.error('No se encontró el contenedor con id "producto".');
        return; // Terminar la función si el contenedor no existe
      }
  
      fetch(`${apiUrl}?limit=${limit}`)
        .then(res => res.json())
        .then(productos => {
          if (!productos.products || productos.products.length === 0) {
            throw new Error("No se encontraron productos en la API.");
          }
  
          card.innerHTML = ''; // Limpia el contenedor antes de añadir nuevos productos
  
          // Recorrer los productos y crear tarjetas
          productos.products.forEach(producto => {
            const cardDiv = document.createElement("div");
            cardDiv.className = "col-md-4";
  
            cardDiv.innerHTML = `
              <div class="card" id="card" style="background-color: #e4e4e4;">
                <img src="${producto.thumbnail}" id="imagen" class="card-img-top imagen" alt="${producto.title}">
                <div class="card-body">
                  <h5 class="card-title" id="titulo">${producto.title}</h5>
                  <h6 class="card-price" id="precio">Precio: $${producto.price}</h6>
                  <p class="descripcion" id="descripcion">${
                    producto.description.length > 50
                      ? producto.description.substring(0, 50) + "..."
                      : producto.description
                  }</p>
                  <button class="btn btn-primary boton-carrito">Agregar al Carrito</button>
                </div>
              </div>
            `;
            card.appendChild(cardDiv);
          });
        })
        .catch(error => {
          console.error("Error al cargar los productos:", error);
          alert("Hubo un error al cargar los productos. Inténtalo más tarde.");
        
        });
    }
    apiProductsIndex()
});