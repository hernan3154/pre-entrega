# PreEntrega - Sitio Web para Electrodomésticos

## Descripción

**PreEntrega** es un sitio web diseñado para mostrar una amplia variedad de electrodomésticos. Incluye un carrusel de imágenes, información detallada de los productos y enlaces a redes sociales. Está destinado a clientes interesados en equipar su hogar con los mejores productos en un solo lugar.

## Características

- **Carrusel**: Presentación automática de imágenes con enlaces a las páginas de productos.
- **Sección de Productos**: Imágenes y descripciones que destacan los beneficios de los electrodomésticos.
- **Navegación Intuitiva**: Menú claro y accesible con enlaces a secciones clave del sitio.
- **Redes Sociales**: Enlaces a plataformas como Instagram, X (antes Twitter), Facebook y WhatsApp para conectar con los clientes.

## Tecnologías Utilizadas

- **HTML5 y CSS3**: Para la estructura y el diseño del sitio.
- **Bootstrap**: Garantiza un diseño responsivo y componentes dinámicos.
- **Font Awesome**: Para los iconos de redes sociales.

---

## Descripción de la Sección de Tarjetas de Productos

La sección de tarjetas de productos representa cada electrodoméstico de manera independiente y visualmente atractiva. Esta sección fue desarrollada utilizando **Bootstrap** para garantizar una presentación moderna, profesional y responsiva.

### Estructura de las Tarjetas

- **Imágenes**: Cada tarjeta incluye una imagen destacada del producto. Estas imágenes provienen de fuentes externas, como Pexels, y se usan únicamente con fines educativos.
- **Cuerpo de la Tarjeta**: Contiene:
  - Un **título** con el nombre del producto.
  - Un **subtítulo** con el precio.
  - Una **descripción breve** de las características del producto.
- **Botón de Acción**: Un botón interactivo que permite al usuario agregar el producto al carrito de compras (aún en desarrollo).

### Ventajas de la Implementación

- **Diseño Responsivo**: Las tarjetas se adaptan automáticamente al tamaño de pantalla, ofreciendo una experiencia óptima en móviles, tabletas y computadoras.
- **Personalización Fácil**: La estructura basada en **Bootstrap** permite realizar cambios y ampliaciones de forma sencilla.
- **Accesibilidad Mejorada**: Las imágenes incluyen atributos `alt` descriptivos, mejorando la accesibilidad y facilitando el uso de lectores de pantalla.

---

## Proyecto Carrito de Compras en Línea

Este proyecto incluye una página web para gestionar productos y un carrito de compras dinámico. Los productos se cargan desde una API externa y los usuarios pueden interactuar con ellos de manera intuitiva.

### Funcionalidades

- **Carga Dinámica de Productos**: Los productos se obtienen desde una API pública como DummyJSON.
- **Visualización Atractiva**: Se muestran tarjetas con imagen, nombre, descripción y precio del producto.
- **Gestión del Carrito**: Los usuarios pueden agregar y eliminar productos del carrito, así como visualizar un resumen.
- **Finalización de Compra**: Un mensaje de éxito se muestra al completar la compra, y el carrito se vacía automáticamente.
- **Persistencia Local**: Los datos del carrito se almacenan en `localStorage` para mantenerlos entre sesiones.

### Tecnologías Utilizadas

- **HTML**: Estructura del contenido.
- **CSS y Bootstrap**: Estilos y diseño responsivo.
- **JavaScript**: Lógica para la interacción con la API y el carrito de compras.
- **Font Awesome**: Iconos en la interfaz.

---

## Instrucciones de Uso

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/hernan3154/pre-entrega.git
   ```

2. Abre el archivo `index.html` en tu navegador para ver la página de productos y el carrito.

3. Asegúrate de que tu navegador permita el uso de `localStorage`.

4. Interactúa con las tarjetas y utiliza el carrito de compras.

---

## Mejoras Futuras

- **Sistema de Autenticación**: Implementar registro e inicio de sesión para usuarios.
- **Persistencia en Servidor**: Guardar los datos del carrito y las compras en un backend.
- **Gestión de Inventarios**: Agregar un sistema para controlar la disponibilidad de productos.

---

### Nota de Personalización

Puedes ajustar las siguientes partes del proyecto según tus necesidades:
- Modificar las descripciones, precios o etiquetas de los productos.
- Personalizar el diseño y los estilos.
- Ampliar las funcionalidades del carrito de compras.

---

## Autor

Este proyecto fue desarrollado con fines educativos y como ejemplo práctico.


