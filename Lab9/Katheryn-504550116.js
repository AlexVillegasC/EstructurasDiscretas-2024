class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = new TreeNode(5);
        this.root.left = new TreeNode(3);
        this.root.right = new TreeNode(6);
        this.root.left.left = new TreeNode(2);
        this.root.left.right = new TreeNode(4);
        this.root.left.left.left = new TreeNode(1);
    }

    inorderSuccessor(root, val) {
        let successor = null;
        let current = root;

        while (current !== null) {
            if (current.val <= val) {
                current = current.right;
            } else {
                successor = current.val;
                current = current.left;
            }
        }

        return successor;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Encontrar y mostrar el sucesor inorden de manera eficiente
let successor = bst.inorderSuccessor(bst.root, 5);
console.log("El sucesor inorden de 5 es: " + successor);