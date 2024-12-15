document.addEventListener("DOMContentLoaded", () => {
  // Función para obtener productos desde la API
  function apiProducts() {
    const apiUrl = 'https://dummyjson.com/products'; // URL de la API
    const limit = 30; // Límite de productos
    const cardContainer = document.getElementById("producto");
    if (!cardContainer) {
      console.error('No se encontró el contenedor con id "producto".');
      return; // Terminar la función si el contenedor no existe
    }

    fetch(`${apiUrl}?limit=${limit}`)
      .then(res => res.json())
      .then(productos => {
        if (!productos.products || productos.products.length === 0) {
          throw new Error("No se encontraron productos en la API.");
        }

        cardContainer.innerHTML = ''; // Limpia el contenedor antes de añadir nuevos productos

        // Recorrer los productos y crear tarjetas
        productos.products.forEach(producto => {
          const cardDiv = document.createElement("div");
          cardDiv.className = "col-lg-3 col-md-4 col-sm-6 mb-4"; // Más flexibilidad responsiva
      
          cardDiv.innerHTML = `
              <div class="card" >
                  <img src="${producto.thumbnail}" class="card-img-top imagen" alt="${producto.title}" aria-label="Imagen del producto ${producto.title}">
                  <div class="card-body">
                      <h5 class="card-title">${producto.title}</h5>
                      <h6 class="card-price">Precio: $${producto.price}</h6>
                      <p class="descripcion">${producto.description.length > 50 ? producto.description.substring(0, 50) + "..." : producto.description}</p>
                      <button class="btn btn-primary boton-carrito">Agregar al Carrito</button>
                  </div>
              </div>
          `;
          cardContainer.appendChild(cardDiv);
      });
      
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
        alert("Hubo un error al cargar los productos. Inténtalo más tarde.");
      });
  }

  // Función para contar los productos en el carrito
  function obtenerCantidadProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    return carrito.length;
  }

  // Función para actualizar el contador del carrito
  function actualizaContadorCarrito() {
    const totalCarrito = obtenerCantidadProductosCarrito();
    const contador = document.querySelector("#cart-count"); // Selecciona el span con id cart-count
    if (contador) {
      contador.textContent = totalCarrito;
    }
  }

  // Inicializa la API y el contador del carrito
  apiProducts();
  actualizaContadorCarrito();

  // Escuchar clics en los botones "Agregar al Carrito"
  document.addEventListener("click", event => {
    if (event.target.classList.contains("boton-carrito")) {
      event.preventDefault();

      // Obtener datos del producto
      const card = event.target.closest(".card");
      const producto = {
        imagen: card.querySelector(".imagen").src,
        titulo: card.querySelector(".card-title").textContent.trim(),
        precio: parseFloat(card.querySelector(".card-price").textContent.split('$')[1]) || 0, // Solo el precio numérico
        descripcion: card.querySelector(".descripcion").textContent.trim(),
      };

      // Actualizar carrito en localStorage
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const index = carrito.findIndex(item => item.titulo === producto.titulo);
      if (index === -1) {
        carrito.push(producto); // Agregar solo si no existe
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizaContadorCarrito(); // Actualizar el contador del carrito
      } else {
        alert("Este producto ya está en el carrito.");
      }
    }
  });
});
