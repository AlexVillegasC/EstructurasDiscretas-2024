//HashTable, como una solución para encontrar nombres de canciones repetitivas

function encontrarCancionesRepetidas(canciones) {
    const conteoCanciones = {};
  
    // Se encarga de contar las ocurrencias de cada canción
    for (const cancion of canciones) {
      if (conteoCanciones[cancion]) {
        conteoCanciones[cancion]++;
      } else {
        conteoCanciones[cancion] = 1;
      }
    }
  
    // Esto lo que hace es filtrar solo las canciones que se repiten
    const cancionesRepetidas = {};
    for (const cancion in conteoCanciones) {
      if (conteoCanciones[cancion] > 1) {
        cancionesRepetidas[cancion] = conteoCanciones[cancion];
      }
    }
  
    return cancionesRepetidas;
  }
  
  // Por ejemplo
  const canciones = [
    "Shape of You",
    "All I Ask",
    "Easy On Me",
    "Rockstar",
    "All I Ask",
    "Someone You Loved",
    "Rockstar",
    "Shape of You",
    "Someone You Loved",
    "All I Ask"
  ];
  
  console.log(encontrarCancionesRepetidas(canciones));