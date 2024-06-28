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
        this.root = new TreeNode(10);
        this.root.left = new TreeNode(5);
        this.root.right = new TreeNode(15);
        this.root.left.left = new TreeNode(3);
        this.root.left.right = new TreeNode(7);
        this.root.right.left = new TreeNode(12);
        this.root.right.right = new TreeNode(20);
    }

    inorderSuccessor(root, val) {
        let successor = null;
        let current = root;

        while (current !== null) {
            if (current.val > val) {
                successor = current;
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return successor;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 7;

// Encontrar y mostrar el sucesor inorden
let successor = bst.inorderSuccessor(bst.root, valueToFindSuccessor);
if (successor !== null) {
    console.log("El siguiente más alto que " + valueToFindSuccessor + " es: " + successor.val);
} else {
    console.log("No existe un valor mayor que " + valueToFindSuccessor);
}