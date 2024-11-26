const producto = document.getElementById('card')
const productos = document.getElementById('card-body')
const titulo = document.getElementById('card-titulo')
const precio = document.getElementById('card-precio')
const descripcion = document.getElementById('card-descripcion')
let productosArray = []
console.log(productosArray)

function poducto() {
    const nuevoProducto = {
        titulo: titulo.textContent,
        precio:precio.textContent.replace('precio','$', ''),
        descripcion: descripcion.textContent,
        
    }
    productosArray.push(nuevoProducto)
    console.log(productosArray)
}
const agregarBoton = document.querySelector('.btn');
agregarBoton.addEventListener('click', poducto);

