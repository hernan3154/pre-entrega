# PreEntrega - Sitio Web para Electrodomésticos

## Descripción

**PreEntrega** es un sitio web para mostrar una variedad de electrodomésticos. incluye un carrusel de imágenes, información detallada de los productos y enlaces a redes sociales. Destinado para clientes interesados en equipar su hogar con los mejores productos en un solo lugar.

## Características

- **Carrusel**: Presentación automática de imágenes con enlaces a la página de productos.
- **Sección de Productos**: Imágenes y descripciones que destacan los beneficios de los electrodomésticos.
- **Navegación Fácil**: Menú de navegación claro y accesible con enlaces a secciones clave.
- **Redes Sociales**: Enlaces a redes sociales como Instagram, X (antes Twitter), Facebook y WhatsApp para conectar con los clientes.

## Tecnologías

- **HTML5 y CSS3**: Estructura y estilo del sitio.
- **Bootstrap**: Para un diseño responsivo y componentes dinámicos.
- **Font Awesome**: Iconos de redes sociales.


# Descripción de la Sección de Tarjetas de Productos

La sección de tarjetas de productos se implementó dentro de un `section` con la clase `section-container`, que contiene múltiples elementos de tipo `div` con la clase `card`, representando cada uno un producto de forma independiente. Esta sección se desarrolló utilizando `Bootstrap` para garantizar una presentación moderna, atractiva y responsiva.

## Estructura de las Tarjetas

- **Imágenes de los productos**: Cada tarjeta incluye una imagen destacada, ubicada en la parte superior mediante la etiqueta `<img>` con la clase `card-img-top`. Las imágenes provienen de enlaces externos (por ejemplo, Pexels) y se utilizan únicamente con fines educativos para simular un catálogo de productos.
- **Cuerpo de la tarjeta**: La información del producto se encuentra en un contenedor `<div>` con la clase `card-body`, el cual contiene:
  - Un título (`<h5>`) que muestra el nombre del producto.
  - Un subtítulo (`<h6>`) que detalla el precio.
  - Una descripción breve (`<p>` con la clase `card-text`), donde se mencionan las características destacadas del producto.
- **Botón de acción**: Debajo del contenido de cada tarjeta se incluye un botón (`<a>` con la clase `btn btn-primary`) que permite al usuario agregar el producto al carrito de compras o interactuar de alguna manera. Este botón es un elemento de acción clave para facilitar la experiencia de usuario.

## Ventajas de la Implementación

- **Diseño responsivo**: Gracias a la utilización de `Bootstrap`, las tarjetas se adaptan automáticamente al tamaño de la pantalla del dispositivo, garantizando una visualización óptima en móviles, tabletas y computadoras de escritorio.
- **Fácil personalización**: La estructura basada en `Bootstrap` permite modificaciones y ampliaciones sencillas, lo cual facilita la adición de nuevas funcionalidades o el cambio de diseño.
- **Accesibilidad**: Se incluyeron atributos `alt` descriptivos en las imágenes para mejorar la accesibilidad de la página y proporcionar contexto a los usuarios que utilizan lectores de pantalla.


