// lineal search

var nombres =["pedro", "juan","daniel"]

console.log(serchName)("daniel")


function serchName(searchCriteria)
{
    for(let i = 0; i < nombres.length; i++)
    {
        if(nombres[i] == searchCriteria)
        {
            return "si se encuentra";
        }
        return "no se encuentra"
    }
}

var Titulo =["El principito","cien años de soledad","don quijote de la mancha","1984","un mundo feliz"]

const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
]
console.log(libros[0].titulo);

// Bubble Sort

// Función para implementar el algoritmo Bubble Sort  
function bubbleSort(arr) {
    // Variable para determinar si se realizó un intercambio durante una iteración
    let swapped;
  
    // El bucle externo se ejecutará hasta que no haya más intercambios necesarios
    do {
      // Inicializamos 'swapped' en falso al comienzo de cada iteración
      swapped = false;
  
      // Bucle interno para recorrer el arreglo desde el principio hasta el penúltimo elemento
      for (let i = 0; i < arr.length - 1; i++) {
        // Comparamos el elemento actual con el siguiente
        if (arr[i] < arr[i + 1]) {
          // Si están en el orden incorrecto, los intercambiamos y marcamos 'swapped' como verdadero
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
      // Si no se realizaron intercambios durante la iteración, el arreglo ya está ordenado
    } while (swapped);
  
    // Devolvemos el arreglo ordenado
    return arr;
  }
  
  // Ejemplo de uso del algoritmo Bubble Sort
  const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
  console.log("Arreglo desordenado:", arrayToSort);
  const sortedArray = bubbleSort(arrayToSort);
  console.log("Arreglo ordenado:", sortedArray);