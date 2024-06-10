// Bubble Sort
function bubbleSort(arr) {

    let swapped;
    do {

      swapped = !true;
  
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }

    } while (swapped);
  
    return arr;
  }
  

  const arrayToSort = [4, 2, 5, 1, 10, 11, 6, 7, 9];
  console.log("Examanes en desorden:", arrayToSort);
  const sortedArray = bubbleSort(arrayToSort);
  console.log("Examanes en orden de mayor a menor:", sortedArray);
  console.log(`Los 5 mejores examenes son: ${arrayToSort.slice(0,5)}`);