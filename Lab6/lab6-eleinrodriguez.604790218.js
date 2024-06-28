//elein rodriguez lab6 arboles binarios

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
    
    // Left subtree of A
    root.left = new TreeNode("B");
    root.left.left = new TreeNode("D");
    root.left.right = new TreeNode("E");
    root.left.left.left = new TreeNode("H");
    root.left.left.right = new TreeNode("I");
    root.left.right.left = new TreeNode("J");
    root.left.right.right = new TreeNode("K");

    // Right subtree of A
    root.right = new TreeNode("C");
    root.right.left = new TreeNode("F");
    root.right.right = new TreeNode("G");
    root.right.left.left = new TreeNode("L");
    root.right.left.right = new TreeNode("M");
    root.right.right.left = new TreeNode("N");
    root.right.right.right = new TreeNode("O");
    return root;
    /*Creamos el arbol el cual acomodamos sus valores de la siguiente forma*/
                    /*                    A                        */ 
                    /*             B              C                */
                    /*          D     E        F      G            */
                    /*       H   I   J  K     L  M    N  O         */ 
}


//Pre-Order
function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value); // Visit the root
        preorderTraversal(node.left); // Traverse left subtree
        preorderTraversal(node.right); // Traverse right subtree
    }
}
let root = createBinaryTree();
console.log("pre-order:");
preorderTraversal(root);


//In-Order
function inorderTraversal(node){
    if (node !== null){
        inorderTraversal(node.left); //Traverse left subtree
        console.log(node.value);// visit the root
        inorderTraversal(node.right); // Traverse right subtree
    }
}
let root2 = createBinaryTree();
console.log("In-order:");
inorderTraversal(root2);

//Post-Order.
function postorderTraversal(node){
    if(node !== null){
        postorderTraversal(node.left); // Traverse left subtree
        postorderTraversal(node.right); //traverse right subtree
        console.log(node.value); // visit root 
    }
}
let root3 = createBinaryTree();
console.log("Post-order");
postorderTraversal(root3);