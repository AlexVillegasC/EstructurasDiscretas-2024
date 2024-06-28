class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createBinaryTree() {
    let root = new TreeNode(20);
    root.left = new TreeNode(10);
    root.right = new TreeNode(30);
    root.left.left = new TreeNode(5);
    root.left.right = new TreeNode(15);
    root.right.left = new TreeNode(25);
    root.right.right = new TreeNode(40);

    return root;
}

//          20
//     10          30
//  5    15     25     40

function findInOrderSuccessor(root, node) {
    // Buscar el sucesor inorden del nodo
    let successor = null;
    if (node.right !== null) {
        // Si el nodo tiene un subárbol derecho, el sucesor es el más a la izquierda en el subárbol derecho
        successor = node.right;
        while (successor.left !== null) {
            successor = successor.left;
        }
    } else {
        // Si no tiene subárbol derecho, buscar desde la raíz
        let current = root;
        while (current !== null) {
            if (node.value < current.value) {
                successor = current;
                current = current.left;
            } else if (node.value > current.value) {
                current = current.right;
            } else {
                break;
            }
        }
    }
    return successor;
}

let root = createBinaryTree();

const node = root.right;

const successor = findInOrderSuccessor(root, node);

if(successor != null){
    console.log("El sucesor inorden de " + node.value + " es " + successor.value)
}
else {
    console.log("No hay sucesor inorden para " + node.value);
}