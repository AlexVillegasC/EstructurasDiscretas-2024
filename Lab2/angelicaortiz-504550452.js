
//lineal search

var nombres = ["Pedro", "Juan", "Daniel"];
var searchCriteria = "Daniel";
console.log(SearchName("Daniel")); 

function SearchName(searchCriteria)
{
for (let i = 0; i < nombres.length; i++)
{
    if(nombres[i] == searchCriteria)
    {
        return "Si se encuentra";
    }
}
return "No se encuentra";
}