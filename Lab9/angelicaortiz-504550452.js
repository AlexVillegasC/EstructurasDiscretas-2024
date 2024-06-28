
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

    inorderSuccessor(val) {
        let current = this.root;
        let successor = null;
        let found = false;

        while (current !== null) {
            if (current.val === val) {
                found = true;
                current = current.right;
            } else if (current.val > val) {
                successor = current;
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return found ? successor.val : null;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 4;

// Encontrar y mostrar el sucesor inorden
let successor = bst.inorderSuccessor(valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}