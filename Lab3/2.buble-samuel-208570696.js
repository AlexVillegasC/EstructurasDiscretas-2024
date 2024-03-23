function bubblelab03(arreglo) {

    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arreglo.length - 1; i++) {
        if (arreglo[i] < arreglo[i + 1]) { //
          [arreglo[i], arreglo[i + 1]] = [arreglo[i + 1], arreglo[i]];
          swapped = true;
        }
      }
     
    } while (swapped);
  
    return arreglo;
  }
  
 const calificaciones = [64, 34, 25, 12, 22, 11, 90];
  console.log("Desordenado", calificaciones);
  const sortArray = bubblelab03(calificaciones);
  console.log("Ordenado:",sortdArray);
  console.log("las 5 calificaciones mas altas son:", calificaciones.slice(0,5));