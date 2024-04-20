function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        // Los últimos i elementos ya están en su lugar
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar si el elemento actual es mayor que el siguiente elemento
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Ejemplo de uso:
var arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("El array ordenado es:", arr);