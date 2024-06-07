

//LINEAL SEARCH

const libros = [

    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"}

    // Asignamos los libros con los ID numericos y su titulo
]

console.log(Search(210)); //Ingresamos un ID para que localize el libro

function Search(SearchCriteria){
    for(let i = 0; i < libros.length; i++)
    {
        if(libros[i].id == SearchCriteria)
        {
            return "El titulo del libro es: " + libros[i].titulo;
        }

    }

    return "ID desconocida";
}
