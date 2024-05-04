//Lab3 primera parte...g.b.h.bhy
var id;
var titulo; 

const libros =
[
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
]

console.log(searchId (457));

function searchId(searchID)
{
    for (let i = 0; i < libros.length; i++)
    {
        if (libros[i].id == searchID)
        {
            return libros[i].titulo;
        }
    }
    return "Nose encuentra";
} 


