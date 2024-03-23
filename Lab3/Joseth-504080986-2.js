function bubbleSort(arr)
{
  let swapped;

  do
  {
    swapped = false;

    for(let i = 0; i < arr.length - 1; i++)
    {
      if(arr[i] < arr[i + 1])
      {
        [arr[i], arr[i + 1]] = [arr[i + 1],arr[i]];
        swapped = true;
      }
    }

  } while(swapped);

  return arr;
}

const arrayToSort = [32,54,65,12,1,34,23,54,67,8];
console.log("Arreglo desordenado:",arrayToSort);
const sortedArray = bubbleSort(arrayToSort);
console.log("Arreglo ordenado:", sortedArray);


//Ejemplo del Laboratorio #3 parte 2

// function sortGrades(calificaciones) {
//   let n = calificaciones.length;
//   for (let i = 0; i < n-1; i++) {
//     for (let j = 0; j < n-i-1; j++) {
//       if (calificaciones[j] < calificaciones[j+1]) {
//         let temp = calificaciones[j];
//         calificaciones[j] = calificaciones[j+1];
//         calificaciones[j+1] = temp;
//       }
//     }
//   }
// }


// function bubbleSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }


// const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
// sortGrades(calificaciones);
// console.log(calificaciones); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]


// console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`);

