class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    findNode(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    findSuccessor(value) {
        let currentNode = this.findNode(value);
        if (!currentNode) return null;

        // Si el nodo tiene un hijo derecho, el sucesor es el nodo más a la izquierda del subárbol derecho
        if (currentNode.right) {
            return this.findMin(currentNode.right);
        }

        // Si no tiene hijo derecho, recorrer desde la raíz buscando el sucesor más cercano
        let successor = null;
        let ancestor = this.root;

        while (ancestor !== currentNode) {
            if (currentNode.value < ancestor.value) {
                successor = ancestor;
                ancestor = ancestor.left;
            } else {
                ancestor = ancestor.right;
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


const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(35);

const successorNode = bst.findSuccessor(15);
if (successorNode) {
    console.log(`El sucesor de 15 es ${successorNode.value}`);
} 
