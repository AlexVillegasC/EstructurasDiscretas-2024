/*INTEGRANTES:
Billy Fabian Ugalde Villagra 504570551
Brandon Vega Ocampo 504520264


*/

function quickSort(array) {
    
    if (array.length < 1) {
    return [];
    }

    var left = [];
    var right = [];
    var pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          left.push(array[i]);
      
    }
    else {
      right.push(array[i]);
    }
      
  }
    
    
return [].concat(quickSort(left), pivot, quickSort(right));
}
let array = [4, 7, 2, 8, 1, 11, 0, 15, 3]
console.log(quickSort(array));
