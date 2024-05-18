// Definimos la lista de compras con los elementos y la cantidad inicial de cada uno
let listaDeCompras = new Map();
listaDeCompras.set('manzanas', 0);
listaDeCompras.set('plátanos', 0);
listaDeCompras.set('leche', 0);
// Añadir más elementos según sea necesario

// Función para añadir elementos a la lista de compras
function agregarElemento(elemento, cantidad) {
    if (listaDeCompras.has(elemento)) {
        let cantidadActual = listaDeCompras.get(elemento);
        listaDeCompras.set(elemento, cantidadActual + cantidad);
    } else {
        listaDeCompras.set(elemento, cantidad);
    }
}

// Simulamos comprar algunos elementos
agregarElemento('manzanas', 5);
agregarElemento('plátanos', 3);
agregarElemento('leche', 1);
// Puedes agregar más elementos según sea necesario

// Mostrar la lista de compras
console.log("Lista de compras actual:");
listaDeCompras.forEach((cantidad, elemento) => {
    console.log(`${elemento}: ${cantidad}`);
});