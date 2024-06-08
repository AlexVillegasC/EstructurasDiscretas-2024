
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//Crea un arbol binario
function createBinaryTree() {
    let root = new TreeNode("A");
    root.left = new TreeNode("B");
    root.right = new TreeNode("C");
    root.left.left = new TreeNode("D");
    root.left.right = new TreeNode("E");
    root.right.left = new TreeNode("F");
    root.right.right = new TreeNode("G");
    root.left.left.left = new TreeNode("H");
    root.left.left.right = new TreeNode("I");
    root.left.right.left = new TreeNode("J");
    root.left.right.right = new TreeNode("K");
    root.right.left.left = new TreeNode("L");
    root.right.left.right = new TreeNode("M");
    root.right.right.left = new TreeNode("N");
    root.right.right.right = new TreeNode("O");
    return root;
}

// Función para imprimir el árbol en preorden (Root, Left, Right)
function preOrder(node) {
    if (node !== null) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}

// Función para imprimir el árbol en in-order (Left, Root, Right)
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}
// Función para imprimir el árbol en postorden (Left, Right, Root)
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

// Crear el árbol
const tree = createBinaryTree();

// Imprimir en preorden
console.log("PreOrder: ");
preOrder(tree);

// Imprimir en in-order
console.log("InOrder: ");
inOrder(tree);

// Imprimir en postorden
console.log("PostOrder: ");
postOrder(tree);
