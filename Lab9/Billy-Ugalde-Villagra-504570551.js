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

    findNode(root, val) {
        while (root !== null && root.val !== val) {
            if (val < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return root;
    }

    inorderSuccessor(root, val) {
        let targetNode = this.findNode(root, val);
        if (targetNode === null) {
            return null;
        }

        // Caso 1: El nodo tiene un subárbol derecho
        if (targetNode.right !== null) {
            let current = targetNode.right;
            while (current.left !== null) {
                current = current.left;
            }
            return current.val;
        }

        // Caso 2: No tiene subárbol derecho, buscar el ancestro más cercano
        let successor = null;
        let ancestor = root;
        while (ancestor !== targetNode) {
            if (targetNode.val < ancestor.val) {
                successor = ancestor;
                ancestor = ancestor.left;
            } else {
                ancestor = ancestor.right;
            }
        }
        return successor ? successor.val : null;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 3;

// Encontrar y mostrar el sucesor inorden usando el método optimizado
let successor = bst.inorderSuccessor(bst.root, valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}
