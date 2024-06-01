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

    inorderSuccessor(root, val) {
        let successor = null;
        while (root) {
            if (val < root.val) {
                successor = root;
                root = root.left;
            } else if (val > root.val) {
                root = root.right;
            } else {
                if (root.right) {
                    root = root.right;
                    while (root.left) {
                        root = root.left;
                    }
                    successor = root.val;
                }
                break;
            }
        }
        return successor;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 5;

// Encontrar y mostrar el sucesor inorden usando el nuevo algoritmo
let successor = bst.inorderSuccessor(bst.root, valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}
