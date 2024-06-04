// Función para encontrar el número más grande en un array
function encontrarNumeroMasGrande(numeros) {
    // Verificar si el array está vacío
    if (numeros.length === 0) {
        return null;
    }

    // Inicializar el número más grande como el primer elemento del array
    let numeroMasGrande = numeros[0];

    // Recorrer el array para encontrar el número más grande
    for (let numero of numeros) {
        if (numero > numeroMasGrande) {
            numeroMasGrande = numero;
        }
    }

    return numeroMasGrande;
}

// Ejemplo de uso
let numeros = [3, 5, 7, 2, 8, -1, 4, 10, 12];
let numeroMasGrande = encontrarNumeroMasGrande(numeros);

console.log(numeroMasGrande); // Output: 12
