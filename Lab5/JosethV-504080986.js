console.log("JOSETH M. VARGAS VENEGAS-504080986 \n")

//1---------------O(1)------------------//
for (let i = 0; i < 10; i++) {
    console.log("Hola mundo X",i);
}

//2---------------O(Log N)------------------//
// function quickSort(arr) 
//   {
//     if (arr.length <= 1) 
//     {
//       return arr;
//     }
  
//     var pivot = arr[0];
//     var left = [];
//     var right = [];
  
//     for (var i = 1; i < arr.length; i++) //Divide los datos al lado left o right dependiendo de su valor
//     {
//       arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//     }
  
//     return quickSort(left).concat(pivot, quickSort(right));
//   }
//   var lista = [34, 7, 23, 32, 5, 62];
//   console.log("Lista inicial:", lista);
//   console.log("Lista ordenada:", quickSort(lista));
  

//3---------------O(N)------------------//
// function sumar(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) //Recorre cada elemento una vez y los suma
//     { 
//       suma += arr[i];
//     }
//     return suma;
//   }
//   const arreglo = [1, 2, 3, 4, 5];
//   const resultado = sumar(arreglo);
//   console.log("El total de la suma es: "+resultado); 
  

//4---------------O(N Log N)------------------//
// function quickSort(arr) 
// {
//     if (arr.length <= 1) 
//     {
//       return arr;
//     }

//     var pivot = arr[0];
//     var left = [];
//     var right = [];
  
//     for (var i = 1; i < arr.length; i++) 
//     {
//       if (arr[i] < pivot) 
//       {
//         left.push(arr[i]);
//       } else 
//       {
//         right.push(arr[i]);
//       }
//     }
  
//     return quickSort(left).concat(pivot, quickSort(right));
//   }
 
//   var arr = [3];
//     let multi = 1;
//     for (let i = 1; i < 6; i++)  //Metodo lineal para generar los numeros del array
//     {
//         multi*=i;
//         arr.push(multi);
//     }  
//     arr.reverse();
//   console.log("Arreglo desordenado:",arr);
//   console.log("Arreglo ordenado:", quickSort(arr));
  

//5---------------O(n^2)------------------//
// function gnomeSort(arr) //se crea la funcion y recibe los parametros en arr
// { 
//     let pos = 0;  //posicion se declara cer0
//     while (pos < arr.length) //mientras la pos sea menor al tamano de arr se repite
//     {
//         if (pos === 0 || arr[pos] >= arr[pos - 1]) // 2 >= 34
//         {
//         pos++; //suma 1 a la posicion
//         } else 
//             {
//                 // Intercambiar elementos
//                 let temp = arr[pos]; //se crea una let temp para asignar el valor del array en la posicion 1
//                 arr[pos] = arr[pos - 1]; // 2 = 34
//                 arr[pos - 1] = temp; //34 = 2
//                 // Retroceder
//                 pos--;
//             }
//        // console.log(arr);   
//     }
//     return arr;
// }
// console.log("Array desordenado inicial: ",[34, 2, 10, -9,1,100,23,45,5,-2,3,0])
// console.log("Array ordenado: ",gnomeSort([34, 2, 10, -9,1,100,23,45,5,-2,3,0]));

//6----------------O(2^N)------------------//
// function fibonacci(num) 
// { 
//     var num1 = 0; 
//     var num2 = 1; 
//     var sum; 
//     for (let i = 0; i < num; i++)  
//     { 
//         sum = num1 + num2; 
//         num1 = num2; 
//         num2 = sum; 
//     } 
//     return num2; 
// } 
// console.log(fibonacci(1)); 
// console.log(fibonacci(12));

//7---------------O(N!)------------------//
// function factorialize(num) 
// {
//   let repeticiones = 0;
//   if (num === 0 || num === 1)
//     return 1;
//   for (let i = num - 1; i >= 1; i--) 
//   {
//     num *= i;
//       repeticiones+=1;  
//   }
//   console.log("Cantidad operaciones o ciclos necesarios = ",repeticiones)
//   //Con esto se demuestra que aumenta la cantidad de ciclos segun el valor utilizado
//   return num;
// }
// console.log(factorialize(10));