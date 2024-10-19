// class trieNode {
//     constructor(){
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new trieNode();
//     }

    
//     insert(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new trieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

    
//     search(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node.children[char]){
//                 return false;  
//             }
//             node = node.children[char];
//         }
//         return node.isEndOfWord;  
//     }
// }

// const trie = new Trie();

// trie.insert('hello');
// trie.insert('word');


// console.log(trie.search('hello')); 
// console.log(trie.search('word'));  
// console.log(trie.search('hell'));  
// console.log(trie.search('world')); 



// class trieNode{
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new trieNode()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word ){
//             if(!node.children[char]){
//                 node.children[char] = new trieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEnd = true 

//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
// }


// const trie = new Trie();

// trie.insert('hello');
// trie.insert('word');


// console.log(trie.search('hello')); 
// console.log(trie.search('word'));  
// console.log(trie.search('hell'));  
// console.log(trie.search('world')); 



// class trieNode{
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie {
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

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false 

//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
// }


// const trie = new Trie();

// trie.insert('hello');
// trie.insert('word');


// console.log(trie.search('hello')); 
// console.log(trie.search('word'));  
// console.log(trie.search('hell'));  
// console.log(trie.search('world')); 




// class trieNode{
//     constructor(){
//         this.children = {}
//         this.isEnd = false 
//     }
// }

// class Trie {
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

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false 
//             }
//             node = node.children[char]
//         }

//         return node.isEnd
//     }
// }


// const trie = new Trie();

// trie.insert('hello');
// trie.insert('word');


// console.log(trie.search('hello')); 
// console.log(trie.search('word'));  
// console.log(trie.search('hell'));  
// console.log(trie.search('world')); 



// class trieNode {
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }

// class Trie {
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

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
// }


// const trie = new Trie();

// trie.insert('hello');
// trie.insert('word');


// console.log(trie.search('hello')); 
// console.log(trie.search('word'));  
// console.log(trie.search('hell'));  
// console.log(trie.search('world')); 


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

//     search(word){
//         let node = this.root
//         for( let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
// }


// const trie = new Trie();

// trie.insert('hello');
// trie.insert('word');


// console.log(trie.search('hello')); 
// console.log(trie.search('word'));  
// console.log(trie.search('hell'));  
// console.log(trie.search('world')); 



class trieNode{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new trieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new trieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }
}


const trie = new Trie();

trie.insert('hello');
trie.insert('word');


console.log(trie.search('hello')); 
console.log(trie.search('word'));  
console.log(trie.search('hell'));  
console.log(trie.search('world')); 


