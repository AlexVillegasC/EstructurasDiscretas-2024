function cocktailSort(arr) {
    let swapped; // Variable para indicar si se ha realizado algún intercambio en la iteración actual
    do {
        swapped = false; // Se establece como falso al comienzo de cada iteración
        // Bucle ascendente: recorre el arreglo de izquierda a derecha
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) { // Compara el elemento actual con el siguiente
                let temp = arr[i]; // Intercambia los elementos si el actual es mayor que el siguiente
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Se establece como verdadero si se realiza algún intercambio
            }
        }
        
        if (!swapped) { // Si no se realizan intercambios en el bucle ascendente, el arreglo está ordenado
            break; // Se sale del bucle do-while
        }

        swapped = false; // Se restablece como falso antes de entrar en el bucle descendente
      
        // Bucle descendente: recorre el arreglo de derecha a izquierda
        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1]) { // Compara el elemento actual con el siguiente
                let temp = arr[i]; // Intercambia los elementos si el actual es mayor que el siguiente
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Se establece como verdadero si se realiza algún intercambio
            }
        }
    } while (swapped); // Continúa ejecutándose mientras se realicen intercambios en alguna dirección
    
    return arr; // Devuelve el arreglo ordenado
}

const array = [3, 0, 2, 5, 4, 1];
console.log("Arreglo antes de ordenar: " + array);
cocktailSort(array);
console.log("Arreglo después de ordenar: " + array);
