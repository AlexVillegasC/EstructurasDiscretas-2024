
//lineal search
/*const readlineSync = require('readline-sync');

const libros = [
  { id: 105, titulo: "El principito" },
  { id: 210, titulo: "Cien años de soledad" },
  { id: 304, titulo: "Don Quijote de la Mancha" },
  { id: 457, titulo: "1984" },
  { id: 501, titulo: "Un mundo feliz" },
  // ...
];

const idBuscado = readlineSync.question("Ingresa el código del libro a buscar: ");
console.log(SearchTitulo(idBuscado));

function SearchTitulo(searchTitulo) {
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id == searchTitulo) {
      return libros[i].titulo;
    }
  }
  return "No se encuentra";
}*/


const libros = [
  { id: 105, titulo: "El principito" },
  { id: 210, titulo: "Cien años de soledad" },
  { id: 304, titulo: "Don Quijote de la Mancha" },
  { id: 457, titulo: "1984" },
  { id: 501, titulo: "Un mundo feliz" },
  // ...
];

console.log(SearchTitulo(210));

function SearchTitulo(searchTitulo) {
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id == searchTitulo) {
      return libros[i].titulo;
    }
  }
  return "No se encuentra";
}

