# Puppies - E-commerce de Productos para Mascotas


## Descripción

**Puppies** es una tienda en línea para productos (ropa, collares, camas y juguetes) para perros y gatos, desarrollada como parte del curso de React.js de CoderHouse.
Mi proyecto reutiliza elementos del curso que realicé de Photoshop y Adobe Illustrator (también de CoderHouse). Busqué crear una experiencia de compra intuitiva, funcional y a la vez estética.


## Características Destacadas

- **Estética Sencilla y Funcional**: Diseño limpio, sencillo y accesible para facilitar la navegación.
- **Verificación de Stock**: Asegura que los productos no se puedan agregar al carrito si no hay stock disponible, mostrando un mensaje emergente indicando esto.
- **Integración con Firebase**: Maneja datos en tiempo real y verificación de stock.
- **Uso de Bootstrap y CSS Personalizado**: Combinación de herramientas para un diseño responsivo y adaptado a las necesidades del proyecto.
- **Selección de Cantidad de Stock**: Los usuarios pueden seleccionar la cantidad de producto que desean agregar al carrito, siempre que haya stock disponible. Esto se maneja mediante un componente de selección de cantidad que permite a los usuarios especificar la cantidad deseada.
- -**Selección de Tallas para Collares y Ropa**: Para productos de categoría "ropa" y "collares", los usuarios pueden elegir entre diferentes tallas. La selección de talla se visualiza en el detalle del producto y se incluye en el carrito de compras.
- -**Indicador de Disponibilidad de Stock en el Carrito**: Si un producto queda sin stock mientras estas procesando la compra, el sistema actualiza el carrito para reflejar esta disponibilidad. Los usuarios son notificados si intentan agregar más productos de los disponibles.
- -**Generación de ID de Orden con Firebase en el Checkout**: Durante el proceso de checkout, se genera un ID único para cada orden mediante Firebase. Este ID se muestra al usuario como confirmación de la compra exitosa.
- -**Mensajes de Error**: Se agregaron mensajes de error en caso de:
   - No haber stock suficiente para el producto que se desea agregar al carrito.
   - No encontrarse el producto en la base de datos o errores relacionados con la base de datos.


## Tecnologías Utilizadas

- **React.js**: Biblioteca principal para el desarrollo de la interfaz de usuario.
- **Firebase**: Para la gestión de datos en tiempo real.
- **Bootstrap**: Para el diseño responsivo y estructural.
- **CSS**: Estilos personalizados para el diseño de la tienda.


## Demostración algunas funcionalidades: [Enlace a video en YouTube, haz clic aquí](https://youtu.be/L3YBRCilKX0)


## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
