const calificaciones = [75, 82, 51, 93, 100, 89, 65, 77, 95];
sortGrades(calificaciones);
console.log(calificaciones); 


function sortGrades(calificaciones) {
    let n = calificaciones.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (calificaciones[j] < calificaciones[j+1]) {
          let temp = calificaciones[j];
          calificaciones[j] = calificaciones[j+1];
          calificaciones[j+1] = temp;
        }
      }
    }
  }

  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }



  console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`);