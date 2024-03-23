// lineal search

var nombres =["pedro", "juan","daniel"]

console.log(serchName)("daniel")


function serchName(searchCriteria)
{
    for(let i = 0; i < nombres.length; i++)
    {
        if(nombres[i] == searchCriteria)
        {
            return "si se encuentra";
        }
        return "no se encuentra"
    }
}

const libros = [
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},

    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
    // ...
];

function buscarId(idBuscado) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idBuscado) {
            return libros[i].titulo;
        }
    }
    return "Libro no encontrado";
}


const idBuscado = 304;
const tituloEncontrado = buscarId(idBuscado);
console.log(tituloEncontrado); 
