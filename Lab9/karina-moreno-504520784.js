class treeNode{
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/*
            5
        3       6
    2       4
1
*/
class binaryTree{
    constructor(){
        this.root = new treeNode(5);
        this.root.left = new treeNode(3);
        this.root.right = new treeNode(6);
        this.root.left.left = new treeNode(2);
        this.root.left.right = new treeNode(4);
        this.root.left.left.left= new treeNode(1);
    }

    inorderSuccessor(root, val){
        let current = this.root;
        let successor;

        while (current !== null) {
            if (current.value === val) {
                if (current.right !== null) {
                    let temp = current.right;
                    while (temp.left !== null) {
                        temp = temp.left;
                    }
                    return temp.value;
                }
                break;
            } else if (val < current.value) {
                successor = current;
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return successor ? successor.value : null;

    }
}

let bst = new binaryTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = 5;

// Encontrar y mostrar el sucesor inorden usando el arreglo
let successor = bst.inorderSuccessor(bst, valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor + " es: " + successor);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor);
}