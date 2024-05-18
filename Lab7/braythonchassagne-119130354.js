function containsDuplicates(nums) {
    // Crear un nuevo Map para almacenar los números vistos
    const numMap = new Map();

    // Iterar sobre cada número en el array
    for (let num of nums) {
        // Verificar si el número ya está en el Map
        if (numMap.has(num)) {
            // Si el número ya está en el Map, significa que es un duplicado
            return true;
        }
        // Si el número no está en el Map, agregarlo
        numMap.set(num, true);
    }

    // Si no se encuentran duplicados después de recorrer todo el array
    return false;
}


