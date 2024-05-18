// function busquedaLineal(arr, elementoABuscar) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === elementoABuscar) {
//             return i; // Devuelve el índice del elemento encontrado
//         }
//     }
//     return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
// }

// // Ejemplo de uso de la función
// let numeros = [10, 20, 30, 40, 50];
// let resultado = busquedaLineal(numeros, 30);
// console.log(resultado);


// if (resultado !== -1) {
//     console.log(`Elemento encontrado en el índice: ${resultado}`);
// } else {
//     console.log("Elemento no encontrado.");
// }

// ////// BINARY SEARCH
// O(log N)
function busquedaBinaria(arr, elementoABuscar) {
    let izquierda = 0;
    let derecha = arr.length - 1;

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);

        if (arr[medio] === elementoABuscar) {
            return medio; // Devuelve el índice del elemento encontrado
        } else if (arr[medio] < elementoABuscar) {
            izquierda = medio + 1; // Descarta la mitad izquierda
        } else {
            derecha = medio - 1; // Descarta la mitad derecha
        }
    }

    return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
}

// Ejemplo de uso de la función
let numeros = [10, 20, 30, 40,50, 52 , 70, 75, 99]; // Asegúrate de que el arreglo esté ordenado
let resultado = busquedaNextSucessor(root, 52);

if (resultado !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultado}`);
} else {
    console.log("Elemento no encontrado.");
}

// Tree Traversals



// Pre Orden (Useful for creating a copy of the tree.)
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Helper function to create a simple tree
function createBinaryTree() {
    let root = new TreeNode("A");
    root.left = new TreeNode("B");
    root.right = new TreeNode("C");
    root.left.left = new TreeNode("D");
    root.left.right = new TreeNode("E");
    root.right.left = new TreeNode("F");
    root.right.right = new TreeNode("G");
    return root;
}
//    A
//  B   C
//D  E F  G
//...

// Preorder Traversal (Root, Left, Right) (Retrieves the nodes in ascending order of their keys.)
function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visit the root
        preorderTraversal(node.left); // Traverse left subtree
        preorderTraversal(node.right); // Traverse right subtree
    }
}

// Example usage
let root = createBinaryTree();
console.log("Preorder traversal:");
preorderTraversal(root);
// console.log("Inorder traversal:");
// inorderTraversal(root);
// console.log("Postorder traversal:");
// postorderTraversal(root);


// Lab 6 Calcular Pre-Order, In-Order, Post-Order.

