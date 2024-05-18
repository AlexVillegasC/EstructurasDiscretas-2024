function eliminarDuplicados(arr) {
    let mapa = new Map();

    arr.forEach(elemento => {
        if (mapa.has(elemento))
         {
            mapa.set(elemento, mapa.get(elemento) + 1);
        } 
        else 
        {
            mapa.set(elemento, 1);
        }
    });

// array para los que no se repiten 
    let unicos = [];
    mapa.forEach((valor, clave) => {
        unicos.push(clave);
    });

    return unicos;
}
// hola
// Ejemplo
let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 7, 8, 9];
let arrSinIguales = eliminarIguales(arr);
console.log(arrSinIguales);

