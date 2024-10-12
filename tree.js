class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
            return;
        }

        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            let current = queue.shift(); 

            if (current.left === null) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left); 
            }

            if (current.right === null) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right); 
            }
        }
    }
}


const tree = new BinaryTree();
tree.insert(1); 
tree.insert(2); 
tree.insert(3); 
tree.insert(4); 
tree.insert(5); 

console.log(JSON.stringify(tree, null, 2));
