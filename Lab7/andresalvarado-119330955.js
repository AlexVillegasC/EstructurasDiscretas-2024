// Función para encontrar el número más grande en un array
function FindHighestNumber(Num) 
{
    // Verificar si el array está vacío
    if (Numbers.length === 0) 
    {
        return null;
    }

    // Inicializar el número más grande como el primer elemento del array a manera de ejemplo
    let HighestNumber = Numbers[0];

    // Recorrer el array para encontrar el número más grande
    for (let Num of Numbers)
    {
        if (Num > HighestNumber)
        {
            HighestNumber = Num;    //si encuentra un numero mas grande que el asignado, lo cambia
        }
    }

    return HighestNumber;   //tira el numero mas grande encontrado en todo el array
}

// Ejemplo de uso
let Numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let HighestNumber = FindHighestNumber(Numbers);

console.log(HighestNumber); //Highest Number: 20