class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // Construcción hard-codeada del árbol
        this.root = new TreeNode(5);
        this.root.left = new TreeNode(3);
        this.root.right = new TreeNode(6);
        this.root.left.left = new TreeNode(2);
        this.root.left.right = new TreeNode(4);
        this.root.left.left.left = new TreeNode(1);
    }

    inorderTraversal(root, val) {
        let previousNode = null;

        const traverse = (node) => 
        {
            if (node!== null)
            {
                traverse(node.left);

                if (previousNode!== null && previousNode.val === val) 
                {
                    console.log("El sucesor inorden de " + val + " es: " + node.val);
                    return;
                }

                previousNode = node;

                traverse(node.right);
            }
        };

        traverse(root);
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

let valueToFindSuccessor = 5;

// Buscar el sucesor inorden
bst.inorderTraversal(bst.root, valueToFindSuccessor);
