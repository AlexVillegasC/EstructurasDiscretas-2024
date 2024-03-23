//linear search

console.log("\n ------------- El rincon del libro -------------\n")

 const libros = [
     {id: 105, titulo: "El principito"},
     {id: 210, titulo: "Cien años de soledad"},
     {id: 304, titulo: "Don Quijote de la Mancha"},
     {id: 457, titulo: "1984"},
     {id: 501, titulo: "Un mundo feliz"},
 ]

 console.log("\n          °°° Lista de libros °°°");

 for(let i = 0; i < libros.length; i++)
 {
    console.log("\nLibro #" + (i+1) + ": ");
    console.log("\nTitulo: " + libros[i].titulo);
    console.log("ID: " + libros[i].id);
 }

 var found = false;

 function searchBook(id)
 {
    for(let i = 0; i < libros.length; i++)
    {
        if(libros[i].id == id)
        {
            found = true;
            return "\n*** Libro encontrado ***\n" + "\nTitulo: " + libros[i].titulo;

        }
    }
    if(!found)
    {
        return "\nLibro no encontrado. ";
    }
 }

console.log(searchBook(304));