// Definir un array de frutas
let frutas = ["manzana", "naranja", "manzana", "pera", "pera", "pera", "pera", "naranja", "pera", "plátano", "plátano", "uva", "uva", "uva"];

// Función para contar duplicados
function contarDuplicados(arr) {
    // Crear un Map vacío para contar las ocurrencias
    let mapa = new Map();

    // Recorrer el array y contar las ocurrencias de cada elemento
    arr.forEach(item => {
        mapa.set(item, (mapa.get(item) || 0) + 1);
    });

    // Filtrar el Map para obtener sólo los duplicados
    let duplicados = new Map([...mapa].filter(([item, count]) => count > 1));

    return duplicados;
}

// Llamar a la función y obtener duplicados
let duplicadosFrutas = contarDuplicados(frutas);

// Imprimir los elementos duplicados y su cantidad
duplicadosFrutas.forEach((cantidad, fruta) => {
    console.log(`Fruta: ${fruta}, Cantidad: ${cantidad}`);
});