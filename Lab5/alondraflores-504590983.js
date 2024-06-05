
//---------Complejidades----------------//

//_-_-_-_-Complejidad Constante_-_-_-_-

function sumar(a, b) //Este algoritmo siempre imprimirá la suma de 2 numeros enteros sin importar el tamaño de esos numeros
{
    return a + b;  
}

console.log(sumar(5,5)); // Imprimirá: 10

//--------------------------------------


//_-_-_-_-Complejidad Logaritmica_-_-_-_-

function Divicion(numero)  //Este algoritmo realizará operaciones dependiendo del tamaño del número                           //entre más grande sea el numero ingresado, más operaciones realizará
{
    let contador = 0;

    while(numero > 1 )  // Operaciones realizadas: 3
    {
        numero = numero / 2;
        contador++;
    }

    return contador;
}

console.log(Divicion(20));  //Imprimirá: 5 


//--------------------------------------

//_-_-_-_-Complejidad Lineal_-_-_-_-

function Linea(numero)  //Esta funcion lo que hara es recorrer todo el vector una ves y contara cuantos digitos 
                        //se encuentran en el 
{
    let contador = 0;
    for(let i = 0; i<numero.length; i++)
    {
        const digito = numero[i].toString();
        contador += digito.length;
    }
    return contador;
}

const linea = [1,2,3,4,5,6];
console.log("La cantidad de digitos es: ",  Linea(linea) ); //Imprimirá: 6

//--------------------------------------//

//_-_-_-_- Complejidad Log-Lineal_-_-_-_-


function Contador(numero) //Esta funcion va a contar y leer todo el vector y tomará esos mismos numeros
                        // y los va a sumar entre ellos.
{
    let contador = 0; 
    

    for(let i =0; i < numero.length; i++)
    {
        let a = numero[i];
        contador+= a;
    }

    return contador;

}
const fila = [3,3,3,3,3]
console.log(Contador(fila)); //imprimirá: 15

//--------------------------------------//

//_-_-_-_- Complejidad Cuadratica_-_-_-_-

function selectionSort(dij) //SelectionSort es un ejemplo claro de Complejidad Cuadratica, ya que a medida de el tamaño 
                                //del array a ordenar aumenta, el tiempo requerido para ordenarlo aumenta cuadráticamente, haiendo que sea más lenta su ejecucion 
 {
    const num = dij.length;

    for (let i = 0; i < num; i++) 
    {
        let num2 = i;

        for (let j = i + 1; j < num; j++) 
        {
            if (dij[j] < dij[num2]) 
            {
                num2 = j;
            }
        }
        [dij[i], dij[num2]] = [dij[num2], dij[i]];
    }
    
    return dij;
}


const nums = [64, 25, 12, 22, 11];
console.log("Array original:", nums); //Imprimirá: 64, 25, 12, 22, 11
console.log("Array ordenado:", selectionSort(nums)); //Imprimirá: 11,12,22,25,64

//--------------------------------------//

//_-_-_-_- Complejidad Exponencial_-_-_-_-

function GenerarSubconjuntos(conjunto)    //Este algoritmo es un ejemplo de Complecidad Exponencial ya que 
{                                         //el número de subconjuntos posibles crece exponencialmente con el tamaño del conjunto original.
    function GenerarRecursivo(subconjunto, index)
     {
        if (index === conjunto.length) 
        {
            console.log(subconjunto);
            return;
        }

        GenerarRecursivo(subconjunto.concat(conjunto[index]), index + 1);     // Incluir elemento en el subconjunto
        GenerarRecursivo(subconjunto, index + 1);                             // No incluir elemento en el subconjunto
    }

    GenerarRecursivo([], 0); 
}

const conjunto = [1, 2, 3];
console.log("Subconjuntos posibles:");
GenerarSubconjuntos(conjunto);

//--------------------------------------//

//_-_-_-_- Complejidad Factorial_-_-_-_-

function generarPermutaciones(elementos)  //Este algoritmo de generación crea todas las permutaciones posibles de un conjunto de elementos utilizando
                                        // la tecnica backtrack
 {
    const n = elementos.length;
    
    function backtrack(inicial)  //Se utiliza la tecnica backtrack para poder utilizar todas las opciones y soluciones posibles 
    {
        if (inicial === n - 1)
         {
            console.log(elementos);
            return;
        }

        for (let i = inicial; i < n; i++) 
        {
            [elementos[inicial], elementos[i]] = [elementos[i], elementos[inicial]]; // Intercambiar elementos
            backtrack(inicial + 1);
            [elementos[inicial], elementos[i]] = [elementos[i], elementos[inicial]]; // Restaurar el orden original
        }
    }

    backtrack(0);
}   

// Ejemplo de uso
const conjunto = ['a', 'b', 'c'];
console.log("Permutaciones posibles:");
generarPermutaciones(conjunto);


