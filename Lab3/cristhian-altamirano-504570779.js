var nombres = ["Pedro", "Juan", "Daniel"];

console.log(searchName("Daniel"))

function searchName(searchCriteira)
{
    for(let i = 0; i < nombres.length; i++)
    {
        if(nombres[i] === searchCriteira)
        {
            return "Si se encuentra. ";
        }
    }

    return "No se encuentra. ";
}

var id;
var titulo;
const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
]


console.log(searchId(501))

function searchId(searchCriteira)
{
    for(let i = 0; i < libros.length; i ++)
    {
        if(libros[i].id === searchCriteira)
        {
            return libros[i].titulo;
        }
    }

    console.log("NO se encontro")
}