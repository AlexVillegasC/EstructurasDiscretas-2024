brandonvegaocampo-504520264.js
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

    inorderSuccessor(root, p) {
        let successor = null;

        while (root !== null) {
            if (p.val < root.val) {
                successor = root;
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return successor;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 5;
let nodeToFind = new TreeNode(valueToFindSuccessor);

// Encontrar y mostrar el sucesor inorden
let successor = bst.inorderSuccessor(bst.root, nodeToFind);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor.val);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}
