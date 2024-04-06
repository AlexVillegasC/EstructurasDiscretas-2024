var id;
var titulo;
//

const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"}
]
/////
console.log(searchID(105))

function searchID(terminoBusqueda){
   //// 
    
for (let i = 0; i < libros.length; i++) {

    if (libros[i].id == terminoBusqueda) {
        return libros[i].titulo; // no estars retornando el titulo, si tienes que retornando
    } 
}
    return "NO SE ENCUENTRA";
}

/// debajo de esto esta el codigo de ordenamiento de vectores.




//Lab 3


//Anteriormente el ejercicio 1
const calificaciones = [7, 8, 5, 9, 10, 8, 6, 7, 9];
const calificaciones2 = [11, 2, 6, 100, 66, 90, 3, 8, 12];
//1. Escribe una función llamada `sortGrades` que toma un arreglo de calificaciones como argumento y lo ordena de mayor a menor utilizando el algoritmo Bubble Sort.


function sortGrades(calificaciones) {
  let n = calificaciones.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-1; j++) {
      if (calificaciones[j] < calificaciones[j+1]) {
        let aux = calificaciones[j];
        calificaciones[j] = calificaciones[j+1];
        calificaciones[j+1] = aux;
      }
    }
  }
  return calificaciones;
}
  
//2. Modifica la función bubbleSort proporcionada anteriormente para ordenar las calificaciones de mayor a menor.



function bubbleSort(calificaciones2) {
    const n = calificaciones.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n -1; j++) {
        if (calificaciones2[j] < calificaciones2[j + 1]) {
          const aux = calificaciones[j];
          calificaciones2[j] = calificaciones2[j + 1];
          calificaciones2[j + 1] = aux;
        }
      }
  }
  return calificaciones2;
}
  

//3. Crea un arreglo de calificaciones de ejemplo y utilízalo para probar la función sortGrades.




console.log(sortGrades(calificaciones)); // Output: [10, 9, 9, 8, 8, 7, 7, 6, 5]
console.log(bubbleSort(calificaciones2));
console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`);