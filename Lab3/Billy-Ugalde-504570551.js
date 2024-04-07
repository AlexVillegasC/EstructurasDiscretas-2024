// ejercicio de libros
let SearchCriteria;
const libros = 
[
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Fin del mundo"},
    {id: 304, titulo: "Pavas"},
    {id: 457, titulo: "1948"},
    {id: 501, titulo: "Un mundo roto"},
]

console.log(Search(105));

function Search(SearchCriteria)
{
    for(let i = 0; i < libros.length; i++)
    {
        if(libros[i].id == SearchCriteria)
        {
            return "Si se encontro el libro, el libro es: " + libros[i].titulo;
        }

    }

    return "No se encontro ningun libro con ese id";
}

//Lab 3

function sortGrades(calificaciones) {
  let n = calificaciones.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (calificaciones[j] < calificaciones[j+1]) {
        let aux = calificaciones[j];
        calificaciones[j] = calificaciones[j+1];
        calificaciones[j+1] = aux;
      }
    }
  }
}
const calificaciones = [1, 20, 4, 100, 10, 7, 9, 3, 2];
sortGrades(calificaciones);
console.log('El vector ordenado: '+ '['+ calificaciones + ']'); 
console.log(`Las cinco calificaciones más altas son: ${calificaciones.slice(0,5)}`);
