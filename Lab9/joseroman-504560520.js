class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNextSuccessor(root, node) {
    // Buscar el sucesor inorden del nodo
    let successor = null;
    if (node.right !== null) {
        // Si el nodo tiene un subárbol derecho, el sucesor es el más a la izquierda en el subárbol derecho
        successor = node.right;
        while (successor.left !== null) {
            successor = successor.left;
        }
    } else {
        // Si no tiene subárbol derecho, buscar desde la raíz
        let current = root;
        while (current !== null) {
            if (node.value < current.value) {
                successor = current;
                current = current.left;
            } else if (node.value > current.value) {
                current = current.right;
            } else {
                break;
            }
        }
    }
    return successor;
}

function createBinaryTree() {
    let root = new TreeNode(7);
    root.left = new TreeNode(4);
    root.right = new TreeNode(10);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(8);
    root.right.right = new TreeNode(15);

    return root;
}
//          7
//     4          10
//  3    5     8     15

let raiz = createBinaryTree();
// Buscar el nodo con valor 5
const nodo = raiz.left.right; //= 5

// Encontrar el siguiente sucesor de 5
const sucesor = findNextSuccessor(raiz, nodo);

if (sucesor !== null) {
    console.log("El sucesor de " + nodo.value + " es " + sucesor.value);
} else {
    console.log("No hay sucesor para " + nodo.value);
}
