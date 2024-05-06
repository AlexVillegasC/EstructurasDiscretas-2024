//Selection Sort / Andres Alvarado-119330955 / Alondra Espinoza-504590983

function selectionSort(arr) 
{
    const sort = arr.length;
    
    //Recorre todos los elementos del arreglo
    for (let i = 0; i < sort; i++) 
    {
        //Encontramos el índice del elemento mas pequeño en lo que queda del arreglo no ordenado
        let MasPequeño = i; //variable que se ocupara que tomar el valor del numero mas pequeño para luego cambiarlo

        for (let j = i + 1; j < sort; j++) //j = +1 porque i = 0 y j debe comparar en el numero que esta en frente (j + 1)
        {
            if (arr[j] < arr[MasPequeño]) //si la posicion 1 > 0
            {
                //[64, 25, 12, 22, 11] / arreglo
                //[ 0,  1,  2,  3,  4] / posiciones
                MasPequeño = j; //la variable toma el valor, este ciclo se repite hasta que se acabe el arreglo
            }
        }
        
        //Intercambiamos el elemento mínimo encontrado con el primer elemento de la parte que no esta ordenada aun
        [arr[i], arr[MasPequeño]] = [arr[MasPequeño], arr[i]];
    }
    
    return arr;
}

const numeros = [64, 25, 12, 22, 11];
console.log("Arreglo original:", numeros);
selectionSort(numeros);
console.log("Arreglo ordenado:", numeros);