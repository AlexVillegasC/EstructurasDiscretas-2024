class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
    //Node D
    root.left.left.left = new TreeNode("H");
    root.left.left.right = new TreeNode("I");
    //Node E
    root.left.right.left = new TreeNode("J");
    root.left.right.right = new TreeNode("K");
    //Node F
    root.right.left.left = new TreeNode("L");
    root.right.left.right = new TreeNode("M");
    //Node G
    root.right.right.left = new TreeNode("N");
    root.right.right.right = new TreeNode("O");

    return root;
}
//          A
//     B          C
//  D    E     F     G
//H  I J  K  L  M  N  O

// Preorder Traversal (Root, Left, Right) (Retrieves the nodes in ascending order of their keys.)
function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visit the root
        preorderTraversal(node.left); // Traverse left subtree
        preorderTraversal(node.right); // Traverse right subtree
    }
}

// Inorder Traversal (Left, Root, Right) (Retrieves the nodes in ascending order of their keys.)
function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left); // Traverse left subtree
        console.log(node.value); // Visit the root
        inorderTraversal(node.right); // Traverse right subtree
    }
}

// Post-Orden Traversal (Left, Right, Root) (Retrieves the nodes in ascending order of their keys.)
function postorderTraversal(node) {
    if (node !== null) {
        postorderTraversal(node.left); // Traverse left subtree
        postorderTraversal(node.right); // Traverse right subtree
        console.log(node.value); // Visit the root
    }
}

// Example usage
let root = createBinaryTree();
console.log("Preorder traversal:");
preorderTraversal(root);
console.log("Inorder traversal:");
inorderTraversal(root);
console.log("Postorder traversal:");
postorderTraversal(root);
