function countingSort(arr, exp) {
    // Inicializa un array de conteo de tamaño 10 (para digitos del 0 al 9)
    const count = Array(10).fill(0);
    
    // Cuenta las ocurrencias de cada dígito en el array
    // Calcula el índice del dígito correspondiente a la posición actual (exp) y lo usa para incrementar el conteo
    arr.forEach(num => {
        const index = Math.floor(num / exp) % 10;
        count[index]++;
    });

    // Ajusta el array de conteo para contener posiciones reales de los valores en el array original
    // Esto convierte el conteo de cada dígito en una posición acumulativa
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Crea un array temporal para los resultados ordenados
    const output = Array(arr.length);
    
    // Construye el array ordenado basado en el array de conteo
    // Recorre el array original de atrás hacia adelante para preservar la estabilidad del algoritmo
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        // Asigna el valor del array original a la posición correspondiente en el array de salida
        output[count[index] - 1] = arr[i];
        // Decrementa el conteo para ajustar las posiciones para los próximos elementos
        count[index]--;
    }

    // Copia los resultados ordenados del array temporal al array original
    // Esto actualiza el array original con los valores ordenados
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    // Encuentra el número máximo en el array para determinar el número de dígitos a procesar
    const maxNum = Math.max(...arr);
    
    // Inicializa el exponente a 1 para la posición del primer dígito
    let exp = 1;
    
    // Ordena los números por cada dígito, comenzando por el dígito menos significativo
    while (Math.floor(maxNum / exp) > 0) {
        // Ordena el array por el dígito actual utilizando countingSort
        countingSort(arr, exp);
        // Incrementa el exponente para mover a la siguiente posición del dígito
        exp *= 10;
    }
}

// Ejemplo de uso
const arr = [170, 45, 9, 90, 802, 24, 2, 66, 1];
console.log("Array original:", arr);

// Ordena el array utilizando radixSort
radixSort(arr);

console.log("Array ordenado:", arr);