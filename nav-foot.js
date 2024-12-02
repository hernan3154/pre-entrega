const header = document.getElementById('header');
const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
console.log(header)
console.log(navbar)
header.innerHTML = `<div class="logo">
                    <a href="index.html"><img src="/img/home-removebg-preview.png" alt="Logo"></a>
                </div>
                <div class="titulo">
                    <h1>Home Electro Domesticos</h1>
                </div>`;

navbar.innerHTML = ` <ul class="nav-ul">
                    <li><a href="index.html"  >Inicio</a></li>
                    <li><a href="productos.html"  >Productos</a></li>
                    <li><a href="nosotros.html" >Nosotros</a></li>
                    <li><a href="contacto.html" >Contacto</a></li>
                    <li><a href="carrito.html" ><i class="fa-solid fa-cart-shopping"></i> 0</a> </li>
                </ul>`;

footer.innerHTML = `<ul class="items-footer">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Productos</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="contacto.html">Contacto</a></li>

                    <div class="social-media">
                        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                            <i class="fa-brands fa-instagram" style="color: #C13584;"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" aria-label="X">
                            <i class="fa-brands fa-x-twitter" style="color: #1DA1F2;"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                            <i class="fa-brands fa-facebook" style="color: #1877F2;"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5491135974873&text=Hola%20me%20interesa%20tu%20producto"
                            target="_blank" aria-label="WhatsApp">
                            <i class="fa-brands fa-whatsapp" style="color: #25D366;"></i>
                        </a>
                    </div>
                    <p>Copyright &#9400; 2024: Hernan </p>
                </ul>`;