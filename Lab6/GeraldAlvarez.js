class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    // In-order traversal
    traverseInOrder(node, callback) {
        if (node !== null) {
            this.traverseInOrder(node.left, callback);
            callback(node);
            this.traverseInOrder(node.right, callback);
        }
    }

    // Pre-order traversal
    traversePreOrder(node, callback) {
        if (node !== null) {
            callback(node);
            this.traversePreOrder(node.left, callback);
            this.traversePreOrder(node.right, callback);
        }
    }

    // Post-order traversal
    traversePostOrder(node, callback) {
        if (node !== null) {
            this.traversePostOrder(node.left, callback);
            this.traversePostOrder(node.right, callback);
            callback(node);
        }
    }
}

// Ejemplo de uso del BST
const bst = new BST();
bst.add(15);
bst.add(25);
bst.add(10);
bst.add(7);
bst.add(22);
bst.add(17);
bst.add(13);
bst.add(5);
bst.add(9);

// Ejemplo de cómo llamar a los métodos de recorrido
console.log('Recorrido en orden:');
bst.traverseInOrder(bst.root, node => console.log(node.value));

console.log('Recorrido preorden:');
bst.traversePreOrder(bst.root, node => console.log(node.value));

console.log('Recorrido postorden:');
bst.traversePostOrder(bst.root, node => console.log(node.value));
