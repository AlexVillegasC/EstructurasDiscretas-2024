class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      let newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // In-order traversal
    inOrder(node, fn) {
      if (node !== null) {
        this.inOrder(node.left, fn);
        fn(node);
        this.inOrder(node.right, fn);
      }
    }
  
    // Pre-order traversal
    preOrder(node, fn) {
      if (node !== null) {
        fn(node);
        this.preOrder(node.left, fn);
        this.preOrder(node.right, fn);
      }
    }
  
    // Post-order traversal
    postOrder(node, fn) {
      if (node !== null) {
        this.postOrder(node.left, fn);
        this.postOrder(node.right, fn);
        fn(node);
      }
    }
  }
  
  // Uso del BST
  const bst = new BinarySearchTree();
  bst.insert(15);
  bst.insert(25);
  bst.insert(10);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);
  bst.insert(5);
  bst.insert(9);
  
  // Ejemplo de cómo llamar a los métodos de recorrido
  console.log('In-order traversal:');
  bst.inOrder(bst.root, node => console.log(node.data));
  
  console.log('Pre-order traversal:');
  bst.preOrder(bst.root, node => console.log(node.data));
  
  console.log('Post-order traversal:');
  bst.postOrder(bst.root, node => console.log(node.data));
  