///lineal search



const nombre = ["Jose","Pedro","daliel",];
    console.log(searchName("daniel"));
    function searchName(searchCriterio)
    {
        for(let i=0; i<nombre.length ; i++)
        {
            if(nombre[i]==searchCriterio)
            {
                return "Si se encuentra";
            }
        }
        return "No se encuentra";
    }





const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
]

console.log(searchLibros(""));
    function searchLibros(searchCriterio)
    {
        for(let i=0; i<libros.length ; i++)
        {
            if(libros[i].id==searchCriterio)
            {
                return "Si se encuentra: " + libros[i].titulo;
            }
        }
        return "No se encuentra";
    }