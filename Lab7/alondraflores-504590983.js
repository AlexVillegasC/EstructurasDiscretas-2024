//--------------------------------------------EJEMPLO-----------------------------------//

function primerCaracterNoRepetido(cadena) {
    // Crear un nuevo objeto Map vacío para almacenar la frecuencia de cada carácter
    let mapa = new Map();
  
    // Recorrer la cadena y contar la frecuencia de cada carácter
    for (let char of cadena) {
      // Si el carácter ya está en el objeto Map, incrementar su contador
      if (mapa.has(char)) {
        mapa.set(char, mapa.get(char) + 1);
      }
      // Si el carácter no está en el objeto Map, agregarlo con un contador de 1
      else {
        mapa.set(char, 1);
      }
    }
  
    // Recorrer la cadena nuevamente para encontrar el primer carácter con frecuencia 1
    for (let char of cadena) {
      if (mapa.get(char) === 1) {
        return char; // Retornar el primer carácter no repetido
      }
    }
  
    return null; // Si no hay ningún carácter no repetido, retornar null
  }
  
  // Ejemplo de uso:
  let cadena = "abacabad";
  let primerNoRepetido = primerCaracterNoRepetido(cadena);
  
  console.log(`El primer carácter no repetido es: "${primerNoRepetido}"`);
  