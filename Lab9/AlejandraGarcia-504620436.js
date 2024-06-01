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

        const findSuccessor = (node) => {
            if (!node) {
                return;
            }

            if (node.val > val) {
                successor = node;
                findSuccessor(node.left);
            } else {
                findSuccessor(node.right);
            }
        };

        findSuccessor(this.root);
        return successor ? successor.val : null;
    }

    getAllValuesInOrder() {
        const values = [];
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                values.push(node.val);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return values;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Obtener todos los valores del árbol en orden
const allValues = bst.getAllValuesInOrder();

// Seleccionar un valor aleatorio de allValues
const randomIndex = bst.getRandomInt(0, allValues.length - 1);
const valueToFindSuccessor = allValues[randomIndex];

// Encontrar y mostrar el sucesor inorden
let successor = bst.inorderSuccessor(bst.root, valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}