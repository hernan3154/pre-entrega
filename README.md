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
  
## Estructura de Archivos



# Descripción de la Sección de Tarjetas de Productos

La sección de tarjetas de productos se implementó representando cada uno un producto de forma independiente. Esta sección se desarrolló utilizando `Bootstrap` para garantizar una presentación moderna, atractiva y responsiva.

## Estructura de las Tarjetas

- **Imágenes de los productos**: Cada tarjeta incluye una imagen destacada. Las imágenes provienen de enlaces externos (por ejemplo, Pexels ) y se utilizan únicamente con fines educativos para simular un catálogo de productos.
- **Cuerpo de la tarjeta**: La información del producto se encuentra en un contenedor `<div>` con la clase `card-body`, el cual contiene:
  - Un título que muestra el nombre del producto.
  - Un subtítulo  que detalla el precio.
  - Una descripción breve con la clase , donde se mencionan las características destacadas del producto.


- **Botón de acción**: Debajo del contenido de cada tarjeta se incluye un botón (`<a>` con la clase `btn btn-primary`) que permite al usuario agregar el producto al carrito de compras o interactuar de alguna manera. Este botón es un elemento de acción clave para facilitar la experiencia de usuario.que todavia esta inplentqado la seccion del carrito de compras que aun no esta terminada

## Ventajas de la Implementación
- **Diseño responsivo**: Gracias a la utilización de `Bootstrap`, las tarjetas se adaptan automáticamente al tamaño de la pantalla del dispositivo, garantizando una visualización óptima en móviles, tabletas y computadoras de escritorio.
- **Fácil personalización**: La estructura basada en `Bootstrap` permite modificaciones y ampliaciones sencillas, lo cual facilita la adición de nuevas funcionalidades o el cambio de diseño.
- **Accesibilidad**: Se incluyeron atributos `alt` descriptivos en las imágenes para mejorar la accesibilidad de la página y proporcionar contexto a los usuarios que utilizan lectores de pantalla.



# Generador de Tarjetas Dinámicas

Esta parte del  proyecto utiliza JavaScript para generar dinámicamente un conjunto de tarjetas de productos con diseño responsivo utilizando Bootstrap.

## Descripción

El script genera  tarjetas de productos y las inserta en un contenedor HTML definido. Cada tarjeta incluye:

- Una imagen aleatoria generada desde [Picsum Photos](https://picsum.photos/).
- Un título, precio y descripción ficticia del producto.
- Un botón interactivo para "Agregar al Carrito".

Las tarjetas se distribuyen en un diseño de rejilla (grid) gracias a las clases de Bootstrap.

## Estructura del Proyecto

### HTML

El archivo HTML debe incluir un contenedor con el ID `card-container` donde se añadirán las tarjetas generadas:

```html
<div id="card-container" class="row"></div> 

*** Resultado


Al ejecutar este script, se generan y muestran 18 tarjetas de productos, distribuidas en tres columnas gracias a las clases de Bootstrap. Las imágenes son únicas para cada tarjeta y el contenido textual describe un producto ficticio con un precio fijo y un botón para agregar al carrito. Este código es una base útil para catálogos dinámicos en aplicaciones de comercio electrónico.




Tecnologías Usadas
HTML
* JavaScript
* Bootstrap
* Personalización
* Puedes modificar las siguientes partes del script según tus necesidades:

Cambiar las descripciones de los productos.
Personalizar el precio o las etiquetas de los botones.
Agregar funcionalidades adicionales al botón "Agregar al Carrito".
Autor
Este código fue creado como un ejemplo de generación dinámica de contenido para páginas web.
