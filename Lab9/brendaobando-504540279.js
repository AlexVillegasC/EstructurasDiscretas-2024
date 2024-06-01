//Este es un ejemplo de algoritmo más optimizado con complejidad de tiempo O(n) en el peor de los casos
//y de espacio O(1)!
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

    findInorderSuccessor(root, val) {
        let successor = null;
        let current = root;

        while (current !== null) {
            if (val < current.val) {
                successor = current;
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                // Node with val found
                if (current.right !== null) {
                    successor = this.findMin(current.right);
                }
                break;
            }
        }
        return successor;
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 5;

// Encontrar y mostrar el sucesor inorden directamente
let successorNode = bst.findInorderSuccessor(bst.root, valueToFindSuccessor);
if (successorNode !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successorNode.val);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}
