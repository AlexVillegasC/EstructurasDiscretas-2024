function busquedaLineal(arr, elementoABuscar) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elementoABuscar) {
            return i; // Devuelve el índice del elemento encontrado
        }
    }
    return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
}

// Ejemplo de uso de la función
let numerosLineal = [5, 15, 25, 35, 45];
let resultadoLineal = busquedaLineal(numerosLineal, 35);
console.log(resultadoLineal);

if (resultadoLineal !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultadoLineal}`);
} else {
    console.log("Elemento no encontrado.");
}

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
let numerosBinarios = [5, 15, 25, 35, 45, 55, 65, 75, 85]; // Asegúrate de que el arreglo esté ordenado
let resultadoBinario = busquedaBinaria(numerosBinarios, 55);

if (resultadoBinario !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultadoBinario}`);
} else {
    console.log("Elemento no encontrado.");
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function createBinaryTree() {
    let root = new TreeNode("X");
    root.left = new TreeNode("Y");
    root.right = new TreeNode("Z");
    root.left.left = new TreeNode("P");
    root.left.right = new TreeNode("Q");
    root.right.left = new TreeNode("R");
    root.right.right = new TreeNode("S");
    return root;
}
//    X
//  Y   Z
// P Q R S


function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visit the root
        preorderTraversal(node.left); // Traverse left subtree
        preorderTraversal(node.right); // Traverse right subtree
    }
}


let rootPreorder = createBinaryTree();
console.log("Preorder traversal:");
preorderTraversal(rootPreorder);



function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left); // Traverse left subtree
        console.log(node.value); // Visit the root
        inorderTraversal(node.right); // Traverse right subtree
    }
}


let rootInorder = createBinaryTree();
console.log("Inorder traversal:");
inorderTraversal(rootInorder);



function postorderTraversal(node) {
    if (node !== null) {
        postorderTraversal(node.left); // Traverse left subtree
        postorderTraversal(node.right); // Traverse right subtree
        console.log(node.value); // Visit the root
    }
}


let rootPostorder = createBinaryTree();
console.log("Postorder traversal:");
postorderTraversal(rootPostorder);


