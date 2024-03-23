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