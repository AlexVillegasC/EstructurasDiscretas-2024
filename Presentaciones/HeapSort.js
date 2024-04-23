function heapSort(arr) {
    const n = arr.length;

    // Función para convertir un subárbol en un heap
    function heapify(arr, n, i) {
        // i es el índice del nodo actual en el arreglo
        let largest = i;
        let left = 2 * i + 1; // Índice del hijo izquierdo
        let right = 2 * i + 2; // Índice del hijo derecho

        // Si el hijo izquierdo existe y es mayor que el nodo actual (el padre)
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // Si el hijo derecho existe y es mayor que el nodo actual (el padre)
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // Si el nodo actual (el padre) no es el mayor, intercambiarlo con el mayor
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            // Llamar recursivamente a heapify en el subárbol reducido
            heapify(arr, n, largest);
        }
    }

    // Construir el heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extraer elementos del heap uno por uno
    for (let i = n - 1; i > 0; i--) {
        // Intercambiar el elemento raíz con el último elemento
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Llamar recursivamente a heapify en el subárbol reducido
        heapify(arr, i, 0);
    }

    return arr;
}

// Ejemplo de uso
const array = [43, 2, 13, 56];
console.log("Arreglo original: ", array);
console.log("Arreglo ordenado con Heap Sort: ", heapSort(array));