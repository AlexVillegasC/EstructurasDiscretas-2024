class TreeNode 
{
    constructor(val) 
    {
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

    inorderSuccessor(root,p) 
    {
        let Sucessor = null;
        while(root !== null)
        {
            if(p.val < root.val)
            {
                Sucessor = root;
                root = root.left;
            }
            else
            {
                root = root.right;
            }
        }   
        return Sucessor;
    }
}

// Crear el árbol
let bst = new BinarySearchTree();

// Valor para el cual buscamos el sucesor inorden
let valueToFindSuccessor = new TreeNode(5);

// Encontrar y mostrar el sucesor inorden usando el arreglo
let successor = bst.inorderSuccessor(bst.root,valueToFindSuccessor);
if (successor !== null) {
    console.log("El sucesor inorden de " + valueToFindSuccessor.val + " es: " + successor.val);
} else {
    console.log("No hay sucesor inorden para " + valueToFindSuccessor.val);
}


// El algoritmo anterior tiene una complejidad de Tiempo O(n) y de espacio O(n).
// El desafío es, conseguir un algorimo más óptimo, que tenga complejidad de tiempo O(n) y de espacio O(1)!