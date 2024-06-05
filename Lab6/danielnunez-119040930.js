// Lab 6 Calcular Pre-Order, In-Order, Post-Order.

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

// Recorrido en orden Pre-Order (Raíz, Izquierda, Derecha)
function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visitar el nodo raíz
        preorderTraversal(node.left); // Recorrer el subárbol izquierdo
        preorderTraversal(node.right); // Recorrer el subárbol derecho
    }
}

// Recorrido en orden In-Order (Izquierda, Raíz, Derecha)
function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left); // Recorrer el subárbol izquierdo
        console.log(node.value); // Visitar el nodo raíz
        inorderTraversal(node.right); // Recorrer el subárbol derecho
    }
}

// Recorrido en orden Post-Order (Izquierda, Derecha, Raíz)
function postorderTraversal(node) {
    if (node !== null) {
        postorderTraversal(node.left); // Recorrer el subárbol izquierdo
        postorderTraversal(node.right); // Recorrer el subárbol derecho
        console.log(node.value); // Visitar el nodo raíz
    }
}

// Ejemplo de uso para el recorrido en orden Pre-Order.
let root1 = createBinaryTree();
console.log("Recorrido en orden Pre-Order:");
preorderTraversal(root1);

// Ejemplo de uso para el recorrido en orden In-Order.
let root2 = createBinaryTree();
console.log("Recorrido en orden In-Order:");
inorderTraversal(root2);

// Ejemplo de uso para el recorrido en orden Post-Order.
let root3 = createBinaryTree();
console.log("Recorrido en orden Post-Order:");
postorderTraversal(root3);
