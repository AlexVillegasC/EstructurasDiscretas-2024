// Definición de la clase TreeNode
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Función para crear el árbol binario
function buildTree() {
    let root = new Node("A");
    root.left = new Node("B");
    root.right = new Node("C");
    root.left.left = new Node("D");
    root.left.right = new Node("E");
    root.right.left = new Node("F");
    root.right.right = new Node("G");
    root.left.left.left = new Node("H");
    root.left.left.right = new Node("I");
    root.left.right.left = new Node("J");
    root.left.right.right = new Node("K");
    root.right.left.left = new Node("L");
    root.right.left.right = new Node("M");
    root.right.right.left = new Node("N");
    root.right.right.right = new Node("O");
    return root;
}

// Recorrido en preorden (Root, Left, Right)
function preorderTraversal(root) {
    if (root !== null) {
        console.log(root.data);
        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }
}

// Recorrido en inorden (Left, Root, Right)
function inorderTraversal(root) {
    if (root !== null) {
        inorderTraversal(root.left);
        console.log(root.data);
        inorderTraversal(root.right);
    }
}

// Recorrido en postorden (Left, Right, Root)
function postorderTraversal(root) {
    if (root !== null) {
        postorderTraversal(root.left);
        postorderTraversal(root.right);
        console.log(root.data);
    }
}

// Crear el árbol binario
const tree = buildTree();

// Imprimir los recorridos
console.log("Recorrido en preorden:");
preorderTraversal(tree);
console.log("\nRecorrido en inorden:");
inorderTraversal(tree);
console.log("\nRecorrido en postorden:");
postorderTraversal(tree);