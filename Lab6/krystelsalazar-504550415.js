class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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

function preorderTraversal(node) {
    if (node !== null) {
        console.log(node.value);
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    }
}

function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left);
        console.log(node.value);
        inorderTraversal(node.right);
    }
}

function postorderTraversal(node) {
    if (node !== null) {
        postorderTraversal(node.left);
        postorderTraversal(node.right);
        console.log(node.value);
        
    }
}

let root = createBinaryTree();

console.log("Preorder traversal:");
preorderTraversal(root);

console.log("-----------------------------------------------------------------------------");

console.log("Inorder traversal:");
inorderTraversal(root);

console.log("-----------------------------------------------------------------------------");

console.log("Postorder traversal:");
postorderTraversal(root);