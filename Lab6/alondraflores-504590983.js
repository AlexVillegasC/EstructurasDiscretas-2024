
//----------------------Arboles Binarios----------------------------//

//Copia del Arbol
class TreeNode 
{
    constructor(value) 
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Arbol
function createBinaryTree() 
{
    let root = new TreeNode(1);                   //           1
    root.left = new TreeNode(2);                   //    2              3
    root.right = new TreeNode(3);                //  4      5       6      7  
    root.left.left = new TreeNode(4);           // 8  9  10  11   12 13  14 15
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    root.left.left.left = new TreeNode(8)
    root.left.left.right = new TreeNode(9);
    root.left.right.left = new TreeNode(10);
    root.left.right.right = new TreeNode(11);
    root.right.left.left = new TreeNode(12);
    root.right.left.right = new TreeNode(13);
    root.right.right.left = new TreeNode(14);
    root.right.right.right = new TreeNode(15);
    return root;
} 

//-----------------------------PRE-ORDER------------------------//
// function preorderTraversal(node) 
// {
//     if (node !== null) 
//     {
//         console.log(node.value); // Visit the root
//         preorderTraversal(node.left); // Traverse left subtree
//         preorderTraversal(node.right); // Traverse right subtree
//     }
// }


// let root = createBinaryTree();
// console.log("Preorder traversal:");
// preorderTraversal(root);


//-------------------IN-ORDER--------------------// 

// function inorderTraversal(node) 
// {
//     if (node !== null) 
//     {
//         inorderTraversal(node.left);// Traverse left subtree
//         console.log(node.value); // Visit the root 
//         inorderTraversal(node.right); // Traverse right subtree
//     }
// }

// let root = createBinaryTree();
// console.log("Inorder traversal:");
// inorderTraversal(root);

//----------------------Post-Oder----------------------------//

function postorderTraversal(node) 
{
    if (node !== null) 
    {
        postorderTraversal(node.left);// Traverse left subtree
        postorderTraversal(node.right); //Traverse right subtree
        console.log(node.value); // Visit the root 
        
    }
}

let root = createBinaryTree();
console.log("Postorder traversal:");
 postorderTraversal(root);






