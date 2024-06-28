// Definición del Nodo
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
    return root;
}

//      A
//   B     C
// D   E

// Preorder Traversal (Root, Left, Right) 
function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visit the root
        preorderTraversal(node.left); // Traverse left subtree
        preorderTraversal(node.right); // Traverse right subtree
    }
}

// InOrder Traversal (Left,Root,Right)
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);  // Recorrer el subárbol izquierdo
        console.log(node.value);      // Visitar la raíz
        inOrderTraversal(node.right); // Recorrer el subárbol derecho
    }
}

// PostOrder Traversal (Left, Right, Root)
function postOrderTraversal(node) {
    if (node !== null) {
        postOrderTraversal(node.left);  // Recorrer el subárbol izquierdo
        postOrderTraversal(node.right); // Recorrer el subárbol derecho
        console.log(node.value);        // Visitar la raíz
    }
}

// Example usage
let root = createBinaryTree();
console.log("Preorder traversal:");
preorderTraversal(root); //A,B,D,E,C

console.log("Inorder traversal:");
inOrderTraversal(root); //D,B,E,A,C

console.log("Postorder traversal:");
postOrderTraversal(root); //D,E,B,C,A
