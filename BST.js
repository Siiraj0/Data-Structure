// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//              this.insertNode(this.root , newNode)
//         }
//     }
//     insertNode(root , newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left , newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right , newNode)
//             }
//         }
//     }
//     search(root , value){
//         if(!root){
//             return false 
//         }else{
//             if(root.value === value){
//                 return true 
//             }else if(value < root.value){
//                 return this.search(root.left , value )
//             }else{
//                 return this.search(root.right , value )
//             }
//         }
//     }
// }

// const bst = new binarySearchTree()


// console.log('tree is empty',bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// console.log(bst.search(bst.root , 10));
// console.log(bst.search(bst.root , 5));
// console.log(bst.search(bst.root , 15));

// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//              this.insertNode(this.root , newNode)
//         }
//     }
//     insertNode(root , newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left , newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right , newNode)
//             }
//         }
//     }
//     search(root , value){
//         if(!root){
//             return false 
//         }else{
//             if(root.value === value){
//                 return true 
//             }else if(value < root.value){
//                 return this.search(root.left , value )
//             }else{
//                 return this.search(root.right , value )
//             }
//         }
//     }
// }

// const bst = new binarySearchTree()


// console.log('tree is empty',bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// console.log(bst.search(bst.root , 10));
// console.log(bst.search(bst.root , 5));
// console.log(bst.search(bst.root , 15));


// class Node {
//     constructor(value){
//         this.value = value 
//         this.left = null 
//         this.right = null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.inserNode(this.root , newNode) 
//         }
//     }

//     inserNode(root , newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.inserNode(root.left , newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{

//                 this.inserNode(root.right , newNode)
//             }
//         }
//     }
//     search(root , value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true 
//             }else if(value < root.value){
//                 return this.search(root.left , value)
//             }else{
//                 return this.search(root.right , value)
//             }
//         }
//     }
// }


// const bst = new binarySearchTree()


// console.log('tree is empty',bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// console.log(bst.search(bst.root , 10));
// console.log(bst.search(bst.root , 5));
// console.log(bst.search(bst.root , 15));



// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root , newNode)
//         }
//     }
//     insertNode(root , newNode){
        
//     }
// }




// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(value) {
//       const newNode = new Node(value);
//       if (!this.root) {
//         this.root = newNode;
//         return this;
//       }
//       let current = this.root;
//       while (true) {
//         if (value < current.value) {
//           if (!current.left) {
//             current.left = newNode;
//             return this;
//           }
//           current = current.left;
//         } else {
//           if (!current.right) {
//             current.right = newNode;
//             return this;
//           }
//           current = current.right;
//         }
//       }
//     }
  
//     isBST() {
//       return this._validateBST(this.root, -Infinity, Infinity);
//     }
  
//     _validateBST(node, min, max) {
      
//       if (node === null) return true;
  
//       if (node.value <= min || node.value >= max) return false;
      
//       return (
//         this._validateBST(node.left, min, node.value) &&
//         this._validateBST(node.right, node.value, max)
//       );
//     }
//   }
  
  
//   const bst = new BinarySearchTree();
//   bst.insert(10);
//   bst.insert(5);
//   bst.insert(15);
//   bst.insert(2);
//   bst.insert(7);
//   bst.insert(13);
//   bst.insert(17);
  
//   console.log(bst.isBST());  
  