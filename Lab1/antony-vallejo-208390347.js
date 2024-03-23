//Operadores aritmeticos
//+
//-
//*
///
//
//Concatenar cadenas 
//El operador + concatena strings de texto ejemplo :
let Nombre = "Antony";
let saludo = "Hola" + " "+ Nombre;
console.log(saludo);//Mostrar 
///
//Recuerda que las variables se declaran con let y const,

//Bucles 
for(let num=0;num<8;num++){

}
//Ejemplo entenderas lo que haces 
//Numeros primos del 1 al 100
for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i+" "+ ".");
    }
}
console.log("-----------------------");
//Numeros impar del 1 al 100
for(let i=0;i<=100;i++)
{
    if(i%2!=0)
    {
        console.log(i+" "+ ".");
    }
} 
//Arrays
console.log("-----------------------");
let vacio=[];
vacio.push("Nuevo elemento");
console.log(vacio);



console.log("-----------------------");
//Array de numeros enteros 
let Numeros = [10,20,30,40,50];
console.log(Numeros);
//Array Frutas
console.log("-----------------------");
let Frutas = ["Manzana","Banana", "cereza", "durazno"];
console.log(Frutas);
//Array Mixto
console.log("-----------------------");
let mixto = [42, "Texto",true,null];
console.log(mixto);

//Array en Javascript, como veras un array puede contener sub-arrays,
//de diferentes tipos de datos,Es una declaracion simple 
console.log("-----------------------");
let varExample = [[39,45,6],5,6,true,9,null];

//Matriz
console.log("-----------------------");
let Matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(Matriz);

//Referencia circular
console.log("-----------------------");
const a= [1,2,3];
a.push(a);
console.log(a);

class Gato
{
    
    constructor(nombre,edad)
    {
        this.nombre=nombre;
        this.edad=edad;
    }
    setNombre(nombre)
    {
        this.nombre=nombre;
    }
    getNombre()
    {
        return this.nombre;
    }
    setEdad(edad)
    {
        this.edad=edad;
    }
    getEdad()
    {
        return this.edad;
    }
    toString()
    {
        return "Mi nombre es: "+this.getNombre()+"\n"+ "Mi edad: "+this.getEdad();
    }
}
//Se meten los objetos en un array
let arrayG=[new Gato('Mina',15),new Gato('Tama',2),new Gato('Pantufla',4)];

//Javascript es muy accesible mira
console.log("-----------------------");
arrayG.forEach(
    function(gato)
    {
        console.log(gato.toString());
    }
)
console.log("-----------------------");
function espalindromo(phrase)
{
   phrase=phrase.toLowerCase().replace(/\s/g,'');//Hacer todo miniscula
   //Remover caracteres en blanco
   let splittedPhrase=phrase.split('');
   //Revertir la cadena
   let revertedphrase = " ";
   for(let i=splittedPhrase.Lenght-1;i>=0;i--)
   {
        revertedphrase+=splittedPhrase[i];
        if(revertedphrase==splittedPhrase)
        {
            return true;
        }
   }
   //revertedString=revertedString.join('');
   //cadena=cadena.join('');
   //Comparar la cadena original con la revertida
   return revertedphrase==phrase;

}
console.log(espalindromo("Anita lava la tina"));//true
console.log(espalindromo("Hola mundo"));//false
console.log(espalindromo("oso"));//true