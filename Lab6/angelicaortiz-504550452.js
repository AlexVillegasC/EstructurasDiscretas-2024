// Lab 6 Calcular Pre-Order, In-Order, Post-Order.
// Tree Traversals

// Pre Orden (Useful for creating a copy of the tree.)
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
    root.left.left.left = new TreeNode("H");
    root.left.left.right = new TreeNode("I");
    root.left.right.left = new TreeNode("J");
    root.left.right.right = new TreeNode("K");
    root.right.left.left = new TreeNode("L");
    root.right.left.right = new TreeNode("M");
    root.right.right.left = new TreeNode("N");
    root.right.right.right = new TreeNode("O");


    return root;
}
/*
                          A
                          
               B                     C

           D        E            F        G

        H   I      J   K       L   M     N   O

*/

// Preorder Traversal (Root, Left, Right) (Retrieves the nodes in ascending order of their keys.)
function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visit the root
        preorderTraversal(node.left); // Traverse left subtree
        preorderTraversal(node.right); // Traverse right subtree
    }
}

// Inorder Traversal (Left, Root, Right) 
function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left); // Traverse left subtree
        console.log(node.value); // Visit the root
        inorderTraversal(node.right); // Traverse right subtree
    }
}

// Postorder Traversal (Left, Right, Root) 
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

console.log("\nInorder traversal:");
inorderTraversal(root);

console.log("\nPostorder traversal:");
postorderTraversal(root);




