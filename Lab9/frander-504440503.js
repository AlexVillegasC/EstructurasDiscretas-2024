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

    findInorderSuccessor(root, p) {
        let successor = null;
        let current = root;
        
        while (current !== null) {
            if (p.val < current.val) {
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
let valueToFindSuccessor = 5;
let node = new TreeNode(valueToFindSuccessor);

// Encontrar y mostrar el sucesor inorden
let successorNode = bst.findInorderSuccessor(bst.root, node);
if (successorNode !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successorNode.val);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}
