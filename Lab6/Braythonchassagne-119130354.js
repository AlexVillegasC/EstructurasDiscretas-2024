class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Calcular Pre-Orden
    preorderTraversal() {
        console.log(this.value); // Visit the root
        if (this.left !== null) {
            this.left.preorderTraversal(); // Traverse left subtree
        }
        if (this.right !== null) {
            this.right.preorderTraversal(); // Traverse right subtree
        }
    }

    // Calcular In-Orden
    inorderTraversal() {
        if (this.left !== null) {
            this.left.inorderTraversal(); // Traverse left subtree
        }
        console.log(this.value); // Visit the root
        if (this.right !== null) {
            this.right.inorderTraversal(); // Traverse right subtree
        }
    }

    // Calcular Post-Orden
    postorderTraversal() {
        if (this.left !== null) {
            this.left.postorderTraversal(); // Traverse left subtree
        }
        if (this.right !== null) {
            this.right.postorderTraversal(); // Traverse right subtree
        }
        console.log(this.value); // Visit the root
    }
}

// Helper function to create a simple tree
function createBinaryTree() {
    let root = new TreeNode("A");
    root.left = new TreeNode("B");
    root.right = new TreeNode("C");
    root.left.left = new TreeNode("D");
    root.left.right = new TreeNode("E");
    root.right.left = new TreeNode("F");
    root.right.right = new TreeNode("G");
    return root;
}

// Example usage
let root = createBinaryTree();

console.log("Preorder traversal:");
root.preorderTraversal();

console.log("Inorder traversal:");
root.inorderTraversal();

console.log("Postorder traversal:");
root.postorderTraversal();
