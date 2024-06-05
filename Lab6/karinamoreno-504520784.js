// Lab 6 --- Pre Order, In Order, Post Order

//base para crear un arbol
class TreeNode{
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//creamos el arbol que se va a utilizar
function createNewBinaryTree(){
    let root = new TreeNode("A");
    root.left = new TreeNode("B")
    root.right = new TreeNode ("C");
    root.left.left = new TreeNode("D");
    root.left.right = new TreeNode ("E");
    root.right.left = new TreeNode("F");
    root.right.right = new TreeNode ("G");
    root.left.left.left = new TreeNode ("H");
    root.left.left.right = new TreeNode("I");
    root.left.right.left = new TreeNode ("J");
    root.left.right.right = new TreeNode("K");
    root.right.left.left = new TreeNode("L");
    root.right.left.right = new TreeNode ("M");
    root.right.right.left = new TreeNode ("N");
    root.right.right.right = new TreeNode ("O");

    return root;
}


/*
                     A
            B                         C
    D           E               F          G
  H   I       J   K           L   M      N   O

*/

// pre order => Raiz, izquierda, derecha.
function preOrder(node){
    if(node !== null){
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}


// in order => Izquierda, centro, derecha.
function inOrder(node){
    if (node !== null) {
        inOrder(node.left);    
        console.log(node.value);    
        inOrder(node.right);
    }
}


// post order => Izquierda, derecha, centro
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

// en uso
let root = createNewBinaryTree();
console.log("Pre Order Traversal");
preOrder(root);

console.log("\nIn Order Traversal");
inOrder(root);

console.log("\nPost Order Traversal");
postOrder(root);