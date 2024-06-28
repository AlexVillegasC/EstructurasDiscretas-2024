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

    inorderSuccessor(node) {
        if (node.right !== null) {
            node = node.right;
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        } else {
            let successor = null;
            let ancestor = this.root;
            while (ancestor !== node) {
                if (ancestor.val > node.val) {
                    ancestor = ancestor.left;
                } else {
                    successor = ancestor;
                    ancestor = ancestor.right;
                }
            }
            return successor;
        }
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 5;
let node = bst.root;

// Encontrar el nodo con el valor dado
while (node !== null && node.val !== valueToFindSuccessor) {
    if (node.val < valueToFindSuccessor) {
        node = node.right;
    } else {
        node = node.left;
    }
}

// Encontrar y mostrar el sucesor inorden
if (node !== null) {
    let successor = bst.inorderSuccessor(node);
    if (successor !== null) {
        console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor.val);
    } else {
        console.log("No hay sucesor inorden para " + valueToFindSuccessor);
    }
} else {
    console.log("El valor " + valueToFindSuccessor + " no existe en el árbol.");
}