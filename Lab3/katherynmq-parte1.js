//Lineal serch

    var name = ["Juan", "Alberto", "Mariana"];

    console.log(SearchName("Mariana"));

function SearchName(searchCriteria){

    for(let i=0; i<name.length; i++){
        if(name[i] === searchCriteria){
            return "Name founded";
        }
    }

    return "Name not found";
}

//Lab 3, parte I
const libros = [
    `{id: 105, titulo: "El principito"},
    {id: 210, titulo: "Cien años de soledad"},
    {id: 304, titulo: "Don Quijote de la Mancha"},
    {id: 457, titulo: "1984"},
    {id: 501, titulo: "Un mundo feliz"},`
    // ...
]

console.log(SearchBook(105));

function SearchBook(searchbook){

    for(let i=0; i<libros.length; i++){
        if(libros[i].includes(searchbook)){
            return "Book founded";
        }
    }

    return "Book not found";
}
