
var cardContainer = document.getElementById("card-container");



//ciclo for 

for (var i = 1; i <= 18; i++) {

  //creamos el div
  var cardDiv = document.createElement("div");
  cardDiv.className = "col-md-4";

  cardDiv.innerHTML = `
  <div class="card" id="card">
         <img src="https://picsum.photos/200/300?random=${i}"
            class="card-img-top" alt="Refrigerador" />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-price">Precio: $520,000</h6>
            <p class="card-text">
              Lavado con agua fría y caliente mantiene la ropa limpia y de moda..
            </p>
            <a href="#" class="btn btn-primary">Agregar al Carrito</a>
          </div>
        </div>
        
        `;
  console.log(cardDiv)
  cardContainer.appendChild(cardDiv)
};
