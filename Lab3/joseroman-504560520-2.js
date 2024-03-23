// Funcion Burbuja

function bubbleSort(arr) {
    let bandera;

    do{
        bandera = false;

        for (let i = 0; i < arr.length - 1; i++) {
            // Comparamos el elemento actual con el siguiente
            if (arr[i] < arr[i + 1]) {
              // Si están en el orden incorrecto, los intercambiamos y marcamos 'swapped' como verdadero
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              bandera = true;
            }
        }


    }while(bandera);

    return arr;

}

const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
console.log(arrayToSort); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]
const ordenado = bubbleSort(arrayToSort);
console.log( `Las cinco calificaciones más altas son: ${ordenado.slice(0,5)}`);
