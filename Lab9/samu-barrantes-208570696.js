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
    inorder(root, val) {
        let sucesor = null;
        let current = root;

        while (current !== null) {
            if (val < current.val) {
                sucesor = current;
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                if (current.right !== null) {
                    return this.Anterior(current.right);
                }
                break;
            }
        }

        return sucesor;
    }
    Anterior(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
let binarySearchTree = new BinarySearchTree();
let NodoEnbusca = 4;
let sucesor = binarySearchTree.inorder(binarySearchTree.root, NodoEnbusca);
if (sucesor !== null) {
    console.log("El sucesor inorden de  es: " + sucesor.val);
} else {
    console.log("No se encontró sucesor");
}
