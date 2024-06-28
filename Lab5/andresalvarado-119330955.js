//Complejidades:

//1). Complejidad Constante (**0(1)): Un algoritmo que sin importar la
//cantidad de entradas siempre sera la misma cantidad de pasos

function ConstantComplexity()
{
    console.log("Constant");
}

//2). Complejidad Logaritmica (**O(Log N)): Este se divide por cada iteracion que haga

function LogarithmicComplexity(Num)
{
    let Counter=0;

    while (Num>1) 
    {
        Num = Math.floor(Num/2);
        Counter++;
    }
    return Counter;
}

//3). Complejidad Lineal (**O(N)): Este algoritmo
//recorrera cada elemento del array una unica vez

function LinearComplexity(arr)
{
    let Suma=0;

    for(let Num of arr)
    {
        Suma+=Num;
    }
    return Suma;
}

//4). Complejidad Log-Lineal(**O(N Log N)): combina
//un proceso lineal con uno logaritmico

function LogLinearComplexity(arr)
{
    arr.sort(); //algoritmo de ordenamiento con esta complejidad
    return arr;
}

//5). Compleljidad Cuadratica (**O(N^2)): Un algoritmo donde el tiempo
//de ejecucion es proporcional al numero de iteraciones que haga

function QuadraticComplexity(N)
{
    let Suma=0;

    for(let i=0; i<N; i++)
    {
        for (let j=0; j<N; j++) 
        {
            Suma++;
        }
    }
    return Suma;
}

//6). Complejidad Exponencial (**O(2^N)): Este algoritmo
//crece exponencialmente dependiendo del numero de entradas

function ExponentialComplexity(N)
{
    if (N<=1) 
    {
        return 1;
    }
    return exponentialAlgorithm(N-1) + exponentialAlgorithm(N-2);
}

//7). Complejidad Factorial (**O(N!)): un algoritmo cuyo número 
//de pasos crece factorialmente con el tamaño de la entrada.
//El peor de los casos: O(N^2)
//El mejor de los casos: O(N log N)

function FactorialComplexity(N)
{
    if (N===0) 
    {
        return 1;
    }
    return N * factorialAlgorithm(N-1);
}