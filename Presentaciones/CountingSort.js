function countSort(arr) {
    let max = Math.max(...arr);   //Se guarda en una variable el número máximo
    let count = Array(max + 1).fill(0);  //Se crea un arreglo del tamaño del número máximo y se llena con ceros
    let output = Array(arr.length); //Se crea un arreglo vacío del tamaño del arreglo original

    console.log("Initial count array:", count);

    for (let i = 0; i < arr.length; i++) 
    {
        count[arr[i]]++;   //Se van sumando en el arreglo count los números que se repitan en el arreglo original
        console.log("Count array after iteration", i + 1, ":", count);
    }

    for (let i = 1; i <= max; i++) 
    {
        count[i] += count[i - 1]; //Se suma el número anterior con el número siguiente (Todo en el arreglo count)
        console.log("Count array after cumulative sum", i, ":", count);
    }

    for (let i = 0; i < arr.length; i++) 
    {
        // 'output[count[arr[i]] - 1]' asigna el valor actual de 'arr[i]' a la posición correcta en el arreglo 'output' (Arreglo vacío del tamaño del arreglo original).
        // Esto se basa en el valor correspondiente en el arreglo 'count'.
        output[count[arr[i]] - 1] = arr[i];
        
        // Decrementa el valor en 'count[arr[i]]' por uno.
        // Esto actualiza el arreglo 'count' para la próxima posición de inserción del valor 'arr[i]'.
        count[arr[i]]--;
    
        console.log("Output array after iteration", i + 1, ":", output);
        console.log("Count array after decrement", i + 1, ":", count);
    }

    console.log("Final output array:", output);

    return output;  //Devuelve arreglo ordenado
}


let array = [4, 2, 2, 3, 4, 1, 1];    

console.log("Array antes de ordenar:", array);
console.log("Array después de ordenar:", countSort(array));