class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findNextSuccessor(root, node) {
    // Find the in-order successor of the node
    let successor = null;
    if (node.right !== null) {
        // If the node has a right subtree, the successor is the leftmost node in the right subtree
        successor = node.right;
        while (successor.left !== null) {
            successor = successor.left;
        }
    } else {
        // If it doesn't have a right subtree, search from the root
        let current = root;
        while (current !== null) {
            if (node.value < current.value) {
                successor = current;
                current = current.left;
            } else if (node.value > current.value) {
                current = current.right;
            } else {
                break;
            }
        }
    }
    return successor;
}

function createBinaryTree() {
    let root = new TreeNode(7);
    root.left = new TreeNode(4);
    root.right = new TreeNode(10);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(8);
    root.right.right = new TreeNode(15);

    return root;
}
//          7
//     4          10
//  3    5     8     15

let root = createBinaryTree();
// Find the node with value 5
const node = root.left.right; //= 5

// Find the next successor of 5
const successor = findNextSuccessor(root, node);

if (successor !== null) {
    console.log("The successor of " + node.value + " is " + successor.value);
} else {
    console.log("There is no successor for " + node.value);
}
