const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
sortGrades(calificaciones);

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
    console.log("Calificaciones ordenadas de mayor a menor:");
    for (let i = 0; i < n; i++) {
        console.log(calificaciones[i]);
    }
}


