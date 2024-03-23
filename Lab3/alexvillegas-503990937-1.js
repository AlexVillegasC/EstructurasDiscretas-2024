// Lineal Search

const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"}
    // ...
]

console.log(libros[0].titulo);

var nombres = ["pedro", "juan", "daniel"];

console.log(searchName("daniel"));

function searchName(searchCriteria)
{
    for(let i = 0; i  < nombres.length;  i++)
    {
        if(nombres[i] == searchCriteria)
        {
            return "Si se encuentra";
        }
    }

    return "No se encuentra";
}