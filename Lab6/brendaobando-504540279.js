// Lab 6 Calcular Pre-Order, In-Order, Post-Order.

// Definicion del Nodo
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
    root.left.left.left=new TreeNode("H");
    root.left.left.right=new TreeNode("I");
    root.left.right.left=new TreeNode("J");
    root.left.right.right=new TreeNode("K");
    root.right.left.left=new TreeNode("L");
    root.right.left.right=new TreeNode("M");
    root.right.right.left=new TreeNode("N");
    root.right.right.right=new TreeNode("O");
    return root;
}

//           A
//     B           C
//  D     E     F     G
//H   I J   K L   M N   O

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
let root1 = createBinaryTree();
console.log("Preorder traversal:");
preorderTraversal(root1); //A,B,D,H,I,E,J,K,C,F,L,M,G,N,O

let root2 = createBinaryTree();
console.log("Inorder traversal:");
inOrderTraversal(root2); //H,D,I,B,J,E,K,A,L,F,M,C,N,G,O

let root3 = createBinaryTree();
console.log("Postorder traversal:");
postOrderTraversal(root3); //H,I,D,J,K,E,B,L,M,F,N,O,G,C,A





