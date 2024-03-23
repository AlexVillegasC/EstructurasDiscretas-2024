// lineal search
/*
var nombres  = ['juana', 'sofia', 'adrian'];

console.log(searchName("sofia"));

function searchName(searchCriteria){

    for (let i=0; i < nombres.length; i++){
        if (nombres[i] == searchCriteria){
            return "Si se encuentra.";
        }
    }

    return "No se encuentra.";

} */


// en lugar de nombre, los libros, en lugar de searchcriteria, el id y debe retornar el nombre del libro 

const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    
]

console.log(searchBooks(304))
   
function searchBooks(bookID){
    for (let i=0; i<libros.length; i++){
        if (libros[i].id == bookID){
            return libros[i].titulo;
        }
    }
    return "No se encuentra el libro";
}