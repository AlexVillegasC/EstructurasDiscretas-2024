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
        console.log(arr);   
    }
    return arr;
}

console.log(gnomeSort([34, 2, 10, -9,1,100,23,45,5,-2,3,0]));

//console.log(gnomeSort([1,2,3,4,5,7,6,8,9,10,11,12]));

//
