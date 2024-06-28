
for (let i = 2; i < 10; i++)
{
    let a = 10;
    a+= i;
    console.log(a + "\n");
    // Exitosa 
}
// console.log(a);  // eroor 
// La variable solo Let funciona dentro del bloque de codigo donde se declara 


for (let i=2; i<10; i++)
{
    var b=10;
    b+=i;
}
console.log(b+"\n");
// la variable var funciona como una variable global
// por lo tanto se puede acceder de ella aunque este declarada en un bloque de codigo.
