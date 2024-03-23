const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
]
console.log(searchBook("105"));



function searchBook(searchCriteria)
{

for(let i=0; i<libros.length; i++)
{
    if (libros[i].id == searchCriteria)
    {
        return "Si se encuentra, es: " + libros[i].titulo;
    }
}

return "No se encuentra.";
}