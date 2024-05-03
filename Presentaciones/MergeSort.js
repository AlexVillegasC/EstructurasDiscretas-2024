
function mergeSort(arr) 
{
  if (arr.length < 2) //caso base
   {
    return arr;
  }

  // Dividir el arreglo en 2 partes
  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);

  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
 {
  let result = [];

  // mientras tengamos elementos en ambos arreglos
  while (left.length && right.length)
   {
    // si el primer elemento del arreglo izquierdo es menor que el primer elemento del arreglo derecho,
    // lo agregamos al resultado y lo eliminamos del arreglo izquierdo
    if (left[0] < right[0])
    {
      result.push(left.shift());
    } else 
    {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}

console.log(mergeSort([3,25,2,53,65,12,43]))  //[2,3,12,25,43,53,65]
