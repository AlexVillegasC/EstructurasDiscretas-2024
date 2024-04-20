//Lineal search

// var nombre=["pedro", "juan", "andres"];

// console.log(SearchNames("pedro"));

// function SearchNames(SearchCriteria)
// {

//     for(let i=0; i < nombre.length; i++)
//     {
//         if(nombre[i] == SearchCriteria)
//         {
//             return "si se encontro";
//         }

//     }

//     return "no se encontro";

// }





const libros = 
[
    {id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},
]

console.log(Search(304));

function Search(SearchCriteria)
{
    for(let i = 0; i < libros.length; i++)
    {
        if(libros[i].id == SearchCriteria)
        {
            return "Si se encontro un libro asociado a ese ID, el libro: " + libros[i].titulo;
        }
    }

    return "No se encontro ningun libro registrado a esa ID";
}