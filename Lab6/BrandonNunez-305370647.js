class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Helper function to create the binary tree
    createBinaryTree() {
        // Nivel 1                                                                           1 
        this.root = new TreeNode(1);                                                  

        // Nivel 2                                                     2                                            3
        this.root.left = new TreeNode(2);                                
        this.root.right = new TreeNode(3);                               

        // Nivel 3                                         4                   5                            6                  7
        this.root.left.left = new TreeNode(4);                  
        this.root.left.right = new TreeNode(5);
        this.root.right.left = new TreeNode(6);
        this.root.right.right = new TreeNode(7);

        // Nivel 4                                    8         9         10         11             12           13      14           15
        this.root.left.left.left = new TreeNode(8);
        this.root.left.left.right = new TreeNode(9);
        this.root.left.right.left = new TreeNode(10);
        this.root.left.right.right = new TreeNode(11);
        this.root.right.left.left = new TreeNode(12);
        this.root.right.left.right = new TreeNode(13);
        this.root.right.right.left = new TreeNode(14);
        this.root.right.right.right = new TreeNode(15);
    }

    // Preorder Traversal (Root, Left, Right)
    preorderTraversal(node = this.root) {
        if (node !== null) {
            console.log(node.value); // Visit the root
            this.preorderTraversal(node.left); // Traverse left subtree
            this.preorderTraversal(node.right); // Traverse right subtree
        }
    }

    // Inorder Traversal (Left, Root, Right)
    inorderTraversal(node = this.root) {
        if (node !== null) {
            this.inorderTraversal(node.left); // Traverse left subtree
            console.log(node.value); // Visit the root
            this.inorderTraversal(node.right); // Traverse right subtree
        }
    }

    // Postorder Traversal (Left, Right, Root)
    postorderTraversal(node = this.root) {
        if (node !== null) {
            this.postorderTraversal(node.left); // Traverse left subtree
            this.postorderTraversal(node.right); // Traverse right subtree
            console.log(node.value); // Visit the root
        }
    }
}

// Ejemplo de uso
let tree = new Tree();
tree.createBinaryTree();
console.log("Preorder traversal:");
tree.preorderTraversal();
console.log("\nInorder traversal:");
tree.inorderTraversal();
console.log("\nPostorder traversal:");
tree.postorderTraversal();
