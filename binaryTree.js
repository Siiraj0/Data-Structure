// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

    
//     insert(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.root = newNode;
//             return;
//         }

//         const queue = [];
//         queue.push(this.root);

//         while (queue.length > 0) {
//             let current = queue.shift(); 

//             if (current.left === null) {
//                 current.left = newNode;
//                 return;
//             } else {
//                 queue.push(current.left); 
//             }

//             if (current.right === null) {
//                 current.right = newNode;
//                 return;
//             } else {
//                 queue.push(current.right); 
//             }
//         }
//     }
// }


// const tree = new BinaryTree();
// tree.insert(1); 
// tree.insert(2); 
// tree.insert(3); 
// tree.insert(4); 
// tree.insert(5); 

// console.log(JSON.stringify(tree, null, 2));


// class Node{
//     constructor(value){
//         this.value = value 
//         this.left = null
//         this.right = null
//     }
// }

// class BinaryTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let newNode = new Node(value)
//       if(this.isEmpty()){
//         this.root = newNode
//       }else{
//         let queue = [this.root]
//         while(queue.length > 0){
//             let current = queue.shift()

//             if(current.left === null){
//                 current.left = newNode
//                 break
//             }else{
//                 queue.push(current.left)
//             }

//             if(current.right === null){
//                 current.right = newNode
//                 break
//             }else{
//                 queue.push(current.right)
//             }
//         }
//       }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return false
//         }

//         let queue = [this.root]
//         while(queue.length > 0){
//             let current = queue.shift()

//             if(current.value === value){
//                 return true 
//             }
//             if(current.left){
//                 queue.push(current.left)
//             }
//             if(current.right){
//                 queue.push(current.right)
//             }
//         }
//         return false
//     }
// }



class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            let queue = [this.root]

            while(queue.length > 0){
                let current = queue.shift()

                if(current.left === null){
                    current.left = newNode
                    break
                }else{
                    queue.push(current.left)
                }
                if(current.right === null){
                    current.right = newNode
                    break
                }else{
                    queue.push(current.right)
                }
            }
        }
    }

    search(value){
        if(this.isEmpty()){
            return false
        }

        let queue = [this.root]
        while(queue.length > 0){
            let current = queue.shift()

            if(current.value === value){
                return true
            }

            if(current.left){
                queue.push(current.left)
            }

            if(current.right){
                queue.push(current.right)
            }
        }
        return false
    }
}


const bt = new BinaryTree();

bt.insert(5);
bt.insert(10);
bt.insert(15);
bt.insert(20);
bt.insert(25);

console.log('Is tree empty? :', bt.isEmpty()); // false

console.log('Searching 5:', bt.search(5));   // true
console.log('Searching 10:', bt.search(10)); // true
console.log('Searching 15:', bt.search(15)); // true
console.log('Searching 125:', bt.search(125)); // false