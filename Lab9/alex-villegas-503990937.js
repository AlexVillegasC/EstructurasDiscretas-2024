class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // Construcción hard-codeada del árbol
        this.root = new TreeNode(5);
        this.root.left = new TreeNode(3);
        this.root.right = new TreeNode(6);
        this.root.left.left = new TreeNode(2);
        this.root.left.right = new TreeNode(4);
        this.root.left.left.left = new TreeNode(1);
    }

    inorderTraversal(root, array) {
        if (root !== null) {
            this.inorderTraversal(root.left, array);
            array.push(root.val);
            this.inorderTraversal(root.right, array);
        }
    }

    inorderSuccessor(array, val) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] === val) {
                return array[i + 1];
            }
        }
        return null; // Si no se encuentra un sucesor
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Realizar un recorrido inorden y almacenar los resultados en un arreglo
let sortedElements = [];
bst.inorderTraversal(bst.root, sortedElements);

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 5;

// Encontrar y mostrar el sucesor inorden usando el arreglo
let successor = bst.inorderSuccessor(sortedElements, valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}


// El algoritmo anterior tiene una complejidad de Tiempo O(n) y de espacio O(n).
// El desafío es, conseguir un algorimo más óptimo, que tenga complejidad de tiempo O(n) y de espacio O(1)!