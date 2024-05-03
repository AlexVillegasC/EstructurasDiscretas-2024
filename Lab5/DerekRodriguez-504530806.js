
{
    console.log("Complejidad O(1)");

    function constantTimeSort(array) {
        // Aqui, podriamos suponer que el array ya esta ordenado,
        // ya que el tiempo de ejecucion no depende del tamaño del array.
        // Entonces, simplemente devolvemos el array original.
        return array;
    }
    
    // Ejemplo de uso:
    const arr = [1,2,3,4,5];
    console.log("Array Original:", arr);
    console.log("Array Acomodado:", constantTimeSort(arr));
}


{
    
    // En si con este ¨Sort¨ abarcamos 3 ejemplos, uno seria el 
    // O(n log n) donde n es el numero de elementos en el array.
    // cuando este se divide en 2 (la mitad) su complejidad
    // pasa a ser O(log n) y por ultimo, cuando se vuelve a dividir
    // pasa a ser una complejidad lineal (O(n)).

    console.log("Complejidad O(Log n)");
    function mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    const arr = [8, 3, 5, 1, 9, 2, 7, 4, 6];
    console.log("Array Original:", arr);
    console.log("Array Acomodado:", mergeSort(arr));
}

{

    console.log("Complejidad O(n)")
    // en este caso, este sort es complejidad O(1)
    // pero en realidad su complejidad se define como 
    //O(n+k) donde n es el numero de elementos y k es el rango de la entrada.
    
    function countingSort(array, maxValue) {
        var count = [];
        var sortedIndex = 0;
    
        for (var i = 0; i <= maxValue; i++) {
            count[i] = 0;
        }
    
        for (var i = 0; i < array.length; i++) {
            count[array[i]]++;
        }
    
        for (var i = 0; i <= maxValue; i++) {
            while (count[i] > 0) {
                array[sortedIndex++] = i;
                count[i]--;
            }
        }
    
        return array;
    }
    
    
    var arr = [ 4, 1, 5, 9, 2, 6, 3];
    var maxValue = Math.max(...arr);
    console.log("Array Original:", arr);
    console.log("Array Acomodado:", countingSort(arr, maxValue));
    
    
    }




{
    console.log("Complejidad O(N Log N)")


    function quickSort(array) {
        if (array.length <= 1) {
            return array;
        }
    
        const pivot = array[Math.floor(array.length / 2)];
        // el math.floor lo que hace es redondear hacia abajo cualquier numero.
        const left = [];
        const right = [];
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else if (array[i] > pivot) {
                right.push(array[i]);
            }
        }
    
        return [...quickSort(left), pivot, ...quickSort(right)];
        // los puntos suspensivos se utilizan para expandir
        // los arrays.
    }
    
    
    const arr = [8, 3, 5, 1, 9, 2, 7, 4, 6];
    console.log("Array original:", arr);
    console.log("Array Acomodado:", quickSort(arr));
}



{
    console.log("Complejidad O(N^2)")


    function gnomeSort(arr) //se crea la funcion y recibe los parametros en arr
{ 
    let pos = 0;  //posicion se declara cer0
    while (pos < arr.length) //mientras la pos sea menor al tamano de arr se repite
    {
        if (pos === 0 || arr[pos] >= arr[pos - 1]) // 2 >= 34
        {
        pos++; //suma 1 a la posicion
        } else 
            {
                // Intercambiar elementos
                let temp = arr[pos]; //se crea una let temp para asignar el valor del array en la posicion 1
                arr[pos] = arr[pos - 1]; // 2 = 34
                arr[pos - 1] = temp; //34 = 2
                // Retroceder
                pos--;
            }
         
    }
    return arr;
}
const arr =[34, 2, 10, -9,1,100,23,45,5,-2,3,0];
console.log("Array original:", arr);
console.log("Array Acomodado:", gnomeSort(arr));
}

{
    console.log("Complejidad O(2^N)")

    function insertionSort(array) {
        const n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
        }
        return array;
    }
    
   
    const arr = [12, 11, 13, 5, 6];
    console.log("Array original:", arr);
    console.log("Array Acomodado:", insertionSort(arr));
}

{
    console.log("Complejidad O(N!)")

    function permuteSort(array) {
        const permutations = generatePermutations(array);
        return permutations.sort((a, b) => sum(a) - sum(b))[0];
    }
    
    function generatePermutations(array) {
        const result = [];
    
        function permute(arr, start) {
            if (start === arr.length - 1) {
                result.push(arr.slice());
                return;
            }
    
            for (let i = start; i < arr.length; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
                permute(arr, start + 1);
                [arr[start], arr[i]] = [arr[i], arr[start]]; // undo swap
            }
        }
    
        permute(array, 0);
        return result;
    }
    
    function sum(array) {
        return array.reduce((acc, val) => acc + val, 0);
    }
    
   
    const arr = [3, 1, 4, 1];
    console.log("Array Original:", arr);
    console.log("Array Acomodado:", permuteSort(arr));

}

    



    

