document.addEventListener("DOMContentLoaded", () => {
    const carritoTableBody = document.getElementById('productos-agregado');
    const totalgeneral = document.getElementById('total');
    const cartCount = document.getElementById('cart-count'); // El span donde se mostrará la cantidad de productos

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function cargarCarrito() {
        carritoTableBody.innerHTML = '';
        let total = 0;
        let cantidadTotal = 0; // Para contar la cantidad total de productos en el carrito

        carrito.forEach((item, index) => {
            const row = document.createElement('tr');

            // Imagen
            const imagenC = document.createElement('td');
            const imagen = document.createElement('img');
            imagen.src = item.imagen;
            imagen.alt = item.titulo;
            imagenC.appendChild(imagen);
            row.appendChild(imagenC);

            // Nombre
            const nombre = document.createElement('td');
            nombre.textContent = item.titulo;
            row.appendChild(nombre);

            // Descripción
            const descripcion = document.createElement('td');
            descripcion.textContent = item.descripcion;
            row.appendChild(descripcion);

            // Precio
            const precio = document.createElement('td');
            precio.textContent = `$${item.precio.toFixed(2)}`;
            row.appendChild(precio);

            // Cantidad (con botones + y -)
            const cantidadTd = document.createElement('td');
            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.classList.add('btn', 'btn-primary', 'btn-sm');
            decrementButton.addEventListener('click', () => actualizarCantidad(index, -1));

            const cantidadSpan = document.createElement('span');
            cantidadSpan.textContent = item.cantidad || 1;
            cantidadSpan.style.margin = '0 10px';

            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.classList.add('btn', 'btn-primary', 'btn-sm');


            incrementButton.addEventListener('click', () => actualizarCantidad(index, 1));
            cantidadTd.appendChild(decrementButton);
            cantidadTd.appendChild(cantidadSpan);
            cantidadTd.appendChild(incrementButton);
            row.appendChild(cantidadTd);

            // Subtotal
            const subtotal = item.precio * (item.cantidad || 1);
            const subtotalPr = document.createElement('td');
            subtotalPr.textContent = `$${subtotal.toFixed(2)}`;
            row.appendChild(subtotalPr);

            // Acción
            const accion = document.createElement('td');
            const eliminarBoton = document.createElement('button');
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.classList.add('btn', 'btn-danger');
            eliminarBoton.addEventListener('click', () => eliminarDelCarrito(item.titulo));
            accion.appendChild(eliminarBoton);
            row.appendChild(accion);

            carritoTableBody.appendChild(row);
            total += subtotal;
            cantidadTotal += item.cantidad || 1; // Sumamos la cantidad de cada producto
        });

        totalgeneral.textContent = total.toFixed(2);
        actualizarContadorCarrito(cantidadTotal); // Actualizamos el contador del carrito
    }

    function actualizarCantidad(index, change) {
        // Actualizar la cantidad en el carrito
        carrito[index].cantidad = Math.max((carrito[index].cantidad || 1) + change, 1); // Evitar cantidades menores a 1
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar el carrito actualizado
        cargarCarrito(); // Recargar el carrito para mostrar cambios
    }

    function eliminarDelCarrito(titulo) {
        carrito = carrito.filter(item => item.titulo !== titulo);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
    }

    function actualizarContadorCarrito(cantidadTotal) {
        // Actualizamos el contador del carrito en el ícono
        if (cartCount) {
            cartCount.textContent = cantidadTotal; // Cambiamos el texto del contador
        }
    }

    document.getElementById('limpiar-carrito').addEventListener('click', () => {
        localStorage.removeItem('carrito');
        carrito = [];
        cargarCarrito();
    });

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        if (carrito.length === 0) {
            Swal.fire('Carrito vacío', 'Agrega productos antes de finalizar.', 'warning');
            return;
        }

        Swal.fire({
            title: 'Compra Procesada',
            text: 'Se ha procesado la compra correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        localStorage.removeItem('carrito');
        carrito = [];
        cargarCarrito();
    });

    cargarCarrito(); // Cargar el carrito inicialmente
});
