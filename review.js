// class Node{
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
//         let newNode= new Node(value)

//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root , newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
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
//             }
//         }
//     }
// }


// class trieNode{
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new trieNode()
//     }

//     insert(word){
//         let node = this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new trieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEnd = true
//     }
// }

class Graph {
    constructor(){
        adjacencyList = {}
    }

    addVertex(vertex){
        if(!adjacencyList[vertex]){
            adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1 , vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    bfsRecursive(vertex){
        let result = []
        let visisted = {}
        let adjecencyList = this.adjacencyList

        function dfs(vertex){

            if(!vertex) return null

            visisted[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(element => {
                if(!visisted[element]){
                    dfs(element)
                }
            });
        }
        dfs(vertex)
        return result
    }
}