class Node 
{
    constructor(data) 
    {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
  
class BinarySearchTree
{
    constructor() 
    {
      this.root = null;
    }
  
    Insert(data) 
    {
      let newNode = new Node(data);

      if (this.root === null) 
      {
        this.root = newNode;
      }
      
      else
      {
        this.InsertNode(this.root, newNode);
      }
    }
  
    InsertNode(node, newNode) 
    {
      if (newNode.data < node.data) 
      {
        if (node.left === null) 
        {
          node.left = newNode;
        }
        
        else
        {
          this.InsertNode(node.left, newNode);
        }
      }
      
      else
      {
        if (node.right === null) 
        {
          node.right = newNode;
        }
        
        else
        {
          this.InsertNode(node.right, newNode);
        }
      }
    }
  
    // In-order traversal
    InOrder(node, fn)
    {
      if (node !== null)
      {
        this.InOrder(node.left, fn);
        fn(node);
        this.InOrder(node.right, fn);
      }
    }
  
    // Pre-order traversal
    PreOrder(node, fn)
    {
      if (node !== null)
      {
        fn(node);
        this.PreOrder(node.left, fn);
        this.PreOrder(node.right, fn);
      }
    }
  
    // Post-order traversal
    PostOrder(node, fn)
    {
      if (node !== null)
      {
        this.PostOrder(node.left, fn);
        this.PostOrder(node.right, fn);
        fn(node);
      }
    }
}
  
// Uso del Binary Search Tree (BST)
const bst = new BinarySearchTree();
bst.Insert(9);
bst.Insert(3);
bst.Insert(11);
bst.Insert(17);
bst.Insert(15);
bst.Insert(7);
bst.Insert(13);
bst.Insert(1);
bst.Insert(5);
  
// Ejemplo de cómo llamar a los métodos de recorrido
console.log('In-order traversal:');
bst.InOrder(bst.root, node => console.log(node.data));
  
console.log('Pre-order traversal:');
bst.PreOrder(bst.root, node => console.log(node.data));
  
console.log('Post-order traversal:');
bst.PostOrder(bst.root, node => console.log(node.data));