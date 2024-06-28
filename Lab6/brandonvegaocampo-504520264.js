

class TreeNode {

    constructor(value) {

        this.value = value;
        this.left = null;
        this.right = null;

    }
}

function createBinaryTree() { // Se arma el arbol binario

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

function preOrder(node) { // Se crea la funcion que imprime el arbol en pre-orden [Raiz, Izquierda, Derecha]

    if (node !== null) {

        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);

    }
}

function inOrder(node) { // Se crea la funcion que imprime el árbol en in-order [Izquiera, Raiz, Derecha]

    if (node !== null) {

        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);

    }
}

function postOrder(node) { // Función para imprimir el árbol en post-orden [Izquierda, Derecha, Raiz]

    if (node !== null) {

        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);

    }
}

const tree = createBinaryTree(); // Se crea el arbol

console.log("PreOrder: "); // Imprimie el resultado en pre-orden
preOrder(tree);

console.log("InOrder: "); // Imprime el resultado en in-order
inOrder(tree);

console.log("PostOrder: "); // Imprime el resultado en post-orden
postOrder(tree);