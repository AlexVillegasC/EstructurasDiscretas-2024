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
        this.root.right.right = new TreeNode(8);
        this.root.right.right.left = new TreeNode(7);
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

// Nodo para el cual buscamos el sucesor inorden
let valueToFindSuccessor = new TreeNode(1);

// Encontrar y mostrar el sucesor inorden
let successor = bst.inorderSuccessor(bst.root, valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor de " + valueToFindSuccessor.val + " es: " + successor.val);
} else {
    console.log("No hay sucesor para " + valueToFindSuccessor.val);
}
