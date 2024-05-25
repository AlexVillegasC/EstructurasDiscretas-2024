// Ejemplo donde se utiliza hash map para eliminar numeros que se encuentren duplicados
function removeDuplicates(arr) {
    const uniqueElements = new Map();
  
    for (const element of arr) {
      uniqueElements.set(element, true);
    }
  
    return Array.from(uniqueElements.keys());
  }
  
  const arr = [1, 2, 3, 2, 1, 3, 1, 4, 2, 5, 6, 7, 6, 5, 5, 8, 9, 1, 2, 3, 5, 6, 7, 9];
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr);

///////////////--------------Otro ejemplo--------------///////////////

//Ejemplo de agregar diferente informacion de una persona 
const hashMap = new Map();

hashMap.set('name', 'John');
hashMap.set('age', 30);
hashMap.set('city', 'New York');

console.log(hashMap.get('name')); // Output: John
console.log(hashMap.get('age')); // Output: 30
console.log(hashMap.get('city')); // Output: New York

// Se remueve la edad
hashMap.delete('age');

// Se chequea si existe edad
console.log(hashMap.has('age')); // false

//Limpia todos los valores del hashMap
hashMap.clear();
//Muestra los valores en hashMap despues de limpiarlo
console.log(hashMap);

