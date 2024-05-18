// Defina un constructor de Nodo para crear nuevos nodos con un valor dado y inicializar los nodos hijos izquierdo y derecho como nulos.
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// Cree un árbol binario con siete nodos y devuelva el nodo raíz.
function createBinaryTree() {
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    return root;
}

// Ejemplo de uso para el recorrido en orden Pre-Order.

//   1 (Root)
//  / \
// 2   3 (Left subtree)
//  / \
// 4  5 (Right subtree)

//Secuencia de recorrido: 1, 2, 4, 5, 3, 6, 7

let root1 = createBinaryTree();
console.log("Recorrido en orden Pre-Order:");
preorderTraversal(root1);

// Recorrido en orden Pre-Order (Raíz, Izquierda, Derecha)
function preorderTraversal(node) {
    if (node!== null) {
        console.log(node.value); // Visitar el nodo raíz
        preorderTraversal(node.left); // Recorrer el subárbol izquierdo
        preorderTraversal(node.right); // Recorrer el subárbol derecho
    }
}

// Ejemplo de uso para el recorrido en orden In-Order.

//   2 (Left subtree)
//  / \
// 1   3 (Root)
//  / \
// 4  5 (Right subtree)

//Secuencia de recorrido: 4, 2, 5, 1, 6, 3, 7

let root2 = createBinaryTree();
console.log("Recorrido en orden In-Order:");
inorderTraversal(root2);

// Recorrido en orden In-Order (Izquierda, Raíz, Derecha)
function inorderTraversal(node) {
    if (node!== null) {
        inorderTraversal(node.left); // Recorrer el subárbol izquierdo
        console.log(node.value); // Visitar el nodo raíz
        inorderTraversal(node.right); // Recorrer el subárbol derecho
    }
}

// Ejemplo de uso para el recorrido en orden Post-Order.

//   4 (Left subtree)
//  / \
// 2   5 (Right subtree)
//  / \
// 1  3 (Root)

//Secuencia de recorrido: 4, 5, 2, 6, 7, 3, 1

let root3 = createBinaryTree();
console.log("Recorrido en orden Post-Order:");
postorderTraversal(root3);

// Recorrido en orden Post-Order (Izquierda, Derecha, Raíz)
function postorderTraversal(node) {
    if (node!== null) {
        postorderTraversal(node.left); // Recorrer el subárbol izquierdo
        postorderTraversal(node.right); // Recorrer el subárbol derecho
        console.log(node.value); // Visitar el nodo raíz
    }
}
