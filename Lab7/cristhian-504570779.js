// Crear un nuevo Map vacío para almacenar los productos y sus cantidades
let inventario = new Map();

// Agregar productos al inventario
inventario.set("camiseta", 25);
inventario.set("pantalón", 15);
inventario.set("chaqueta", 10);

// Obtener la cantidad de un producto
console.log(inventario.get("camiseta")); // Imprime: 25

// Recorrer el Map
inventario.set("zapatos", 20);
inventario.set("sombrero", 8);

inventario.forEach((cantidad, producto) => {
  console.log(`Producto: ${producto}, Cantidad: ${cantidad}`);
});

// Array con los productos en stock
let productos = [
    "camiseta", "pantalón", "camiseta", "chaqueta", "zapatos", "pantalón",
    "camiseta", "sombrero", "camiseta", "zapatos", "pantalón", "chaqueta",
    "camiseta", "zapatos", "camiseta", "sombrero", "pantalón", "chaqueta"
  ];
  
  // Función para contar las cantidades de cada producto
  function contarInventario(productos) {
    let inventario = new Map();
  
    // Recorrer el array de productos
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];
  
      // Si el producto ya está en el Map, incrementar su contador
      if (inventario.has(producto)) {
        inventario.set(producto, inventario.get(producto) + 1);
      }
      // Si el producto no está en el Map, agregarlo con un contador de 1
      else {
        inventario.set(producto, 1);
      }
    }
  
    return inventario;
  }
  
  // Contar las cantidades de cada producto
  let inventarioCantidades = contarInventario(productos);
  
  // Imprimir los productos y sus cantidades
  inventarioCantidades.forEach((cantidad, producto) => {
    console.log(`Producto: ${producto}, Cantidad: ${cantidad}`);
  });
  
  // Identificar productos con existencias bajas y grandes cantidades
  console.log("Productos con existencias bajas:");
  inventarioCantidades.forEach((cantidad, producto) => {
    if (cantidad < 5) {
      console.log(`Producto: ${producto}, Cantidad: ${cantidad}`);
    }
  });
  
  console.log("\nProductos con grandes cantidades:");
  inventarioCantidades.forEach((cantidad, producto) => {
    if (cantidad > 10) {
      console.log(`Producto: ${producto}, Cantidad: ${cantidad}`);
    }
  });