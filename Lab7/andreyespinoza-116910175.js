// Crear un hashmap para almacenar el inventario por producto y talla
let inventario = {};

// Función para agregar o actualizar el inventario de un artículo
function actualizarInventario(producto, talla, cantidad) {
  let clave = producto + '-' + talla;
  inventario[clave] = (inventario[clave] || 0) + cantidad;
}

// Función para obtener la cantidad disponible de un artículo
function obtenerCantidadDisponible(producto, talla) {
  let clave = producto + '-' + talla;
  return inventario[clave] || 0;
}

// Actualizar el inventario con algunos artículos
actualizarInventario('Camiseta', 'M', 10);
actualizarInventario('Jeans', '32', 5);
actualizarInventario('Camiseta', 'M', -2); // Venta de 2 camisetas talla M

// Obtener la cantidad disponible de camisetas talla M
let cantidadCamisetasM = obtenerCantidadDisponible('Camiseta', 'M');
console.log(`Cantidad disponible de Camisetas talla M: ${cantidadCamisetasM}`);
