function bubbleSort (arr)
{
    let swapped;

    do 
    {
        swapped  = false;
        
        for (let i = 0; i < arr.length - 1; i ++)
        {
            if (arr[i] < arr[i + 1])
            {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo desordenado: ", arrayToSort);
const sorteArray = bubbleSort (arrayToSort);
console.log("Arreglo ordenado:", sorteArray);
