// realizar un problema donde sea mejor usar hash map que cualquier otro metodo.

function contarFrecuencias(texto) {
    // /\b\w+\b/g sirve para ignorar cualquier espacio o puntuacion.
    const palabras = texto.toLowerCase().match(/\b\w+\b/g);
    
    // Creamos el hash map 
    let frecuencias = new Map();

    // Recorremos cada palabra en el texto
    for (let i = 0; i<palabras.length; i++)
        {
        if (frecuencias.has(palabras[i])) {
            frecuencias.set(palabras[i], frecuencias.get(palabras[i])+1); // como aqui ya encuentra que la palabra existe, entonces lo que hace es sumarle.
        } else {
            frecuencias.set(palabras[i], 1); // si no existe la palabra, la agrega a la lista
        }
    };

    return frecuencias;
}

function contarFrecuenciasNum(numeros) {
    // /\b\w+\b/g sirve para ignorar cualquier espacio o puntuacion.
   // const palabras = texto.toLowerCase().match(/\b\w+\b/g);
    
    // Creamos el hash map 
    let frecuencias = new Map();

    // Recorremos cada palabra en el texto
    for (let i = 0; i<numeros.length; i++)
        {
        if (frecuencias.has(numeros[i])) {
            frecuencias.set(numeros[i], frecuencias.get(numeros[i])+ 1); // como aqui ya encuentra que la palabra existe, entonces lo que hace es sumarle.
        } else {
            frecuencias.set(numeros[i], 1); // si no existe la palabra, la agrega a la lista
        }
    };

    return frecuencias;
}
// Ejemplo de uso
const texto = "Este es un ejemplo. Este ejemplo es sencillo. Este es otro ejemplo.";
const numeros = [1,2,3,4,1,2,3,1,2,3,1,2,3,4,5,6,4,5,6,4,5,6,4,5,6]

const resultado = contarFrecuencias(texto);
let resultado2 = contarFrecuenciasNum(numeros);
console.log(resultado);
console.log(resultado2);