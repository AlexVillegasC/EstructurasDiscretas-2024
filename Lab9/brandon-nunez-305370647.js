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

    inorderSuccessor(node) {
        let successor = null;
        let curr = this.root;
    
        while (curr !== null) {
            if (node.val < curr.val) {
                successor = curr;
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
    
        return successor;
    }   
}

let bst = new BinarySearchTree();
let valueToFindSuccessor = 5;

let node = bst.root;
while (node !== null && node.val !== valueToFindSuccessor) {
    node = node.val > valueToFindSuccessor ? node.left : node.right;
}

let successor = bst.inorderSuccessor(node);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor.val);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}
