// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

const { start } = require("repl")

    
//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

    
//     addEdge(vertex1, vertex2) {
//         this.addVertex(vertex1);
//         this.addVertex(vertex2);
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1); 
//     }
// }


// const graph = new Graph();
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// console.log(graph.adjacencyList);








// class graph{
//     constructor(){
//         this.adjecencyList = {}

//     }

//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjecencyList[vertex1].push(vertex2)
//         this.adjecencyList[vertex2].push(vertex1)
//     }
// }


// const grph = new graph()

// grph.addEdge('a' , 'x')
// grph.addEdge('a' , 'c')
// grph.addEdge('k' , 'm')
// console.log(grph.adjecencyList);





// class Graph {
//     constructor(){
//         this.ajenecencyList = {}
//     }

//     addVertex(vertex){

//         if(!this.ajenecencyList[vertex]){
//             this.ajenecencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.ajenecencyList[vertex1].push(vertex2)
//         this.ajenecencyList[vertex2].push(vertex1)
//     }
// }



// class Graph {

//     constructor(){
//         this.adjacencyLIst = {}

//     }

//     addVertex(vertex){
//         if(!this.adjacencyLIst[vertex]){
//             this.adjacencyLIst[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjacencyLIst[vertex1].push(vertex2)
//         this.adjacencyLIst[vertex2].push(vertex1)
//     }
// }

// const grph = new Graph()

// grph.addEdge('a' , 'x')
// grph.addEdge('a' , 'c')
// grph.addEdge('k' , 'm')
// console.log(grph.adjacencyLIst);

// class Graph{
//     constructor(){
//         this.adjecencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = []
//         }


//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjecencyList[vertex1].push(vertex2)
//         this.adjecencyList[vertex2].push(vertex1)
//     }
//       dfsRecursive(start, visited = new Set()) {
//         if (!this.adjacencyList[start]) return; 
//         visited.add(start); 
//         console.log(start); 

        
//         for (let neighbor of this.adjacencyList[start]) {
//             if (!visited.has(neighbor)) {
//                 this.dfsRecursive(neighbor, visited);
//             }
//         }
//     }
// }

// const grph = new Graph()

// grph.addEdge('a', 'b')
// grph.addEdge('s', 'm')
// grph.addEdge('d', 'k')

// console.log(grph.adjecencyList);



// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     dfsRecursive(start) {
//         const result = []
//         const visited = {}
//         const adjacencyList = this.adjacencyList
        
//         function dfs(vertex) {
//             if (!vertex) return null;
//             visited[vertex] = true;
//             result.push(vertex);
//             adjacencyList[vertex].forEach(neighbor => {
//                 if (!visited[neighbor]) {
//                     dfs(neighbor);
//                 }
//             });
//         }

//         dfs(start);
//         return result;
//     }
// }

// const grph = new Graph()

// grph.addEdge('a' , 'x')
// grph.addEdge('a' , 'c')
// grph.addEdge('k' , 'm')
// // console.log(grph.adjacencyList);
// console.log(grph.dfsRecursive('a')); 


// class Graph{
//     constructor(){
//         this.adjecencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjecencyList[vertex1].push(vertex2)
//         this.adjecencyList[vertex2].push(vertex1)
//     }

//     dfsRecursive(start){
//         const result = []
//         const visited = {}
//         const adjecencyList = this.adjecencyList

//         function dfs(vertex){
//             if(!vertex) return null
//             visited[vertex] = true
//             result.push(vertex)
//             adjecencyList[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     dfs(neighbor)
//                 }
//             });
//         }
//         dfs(start)
//         return result

//     }
// }

// const graph = new Graph()
// graph.addEdge('a' , 'b')
// graph.addEdge('c' , 'd')
// graph.addEdge('e' , 'f')
// console.log(graph.dfsRecursive('a'));





// class Graph{
//     constructor(){
//         this.adjecencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1,vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjecencyList[vertex1].push(vertex2)
//         this.adjecencyList[vertex2].push(vertex1)
//     }

//     dfsRecursive(start){
//         const result = []
//         const visited = {}
//         const adjecencyList = this.adjecencyList

//         function dfs(vertex){
//             if(!vertex) return null
//             visited[vertex] = true
//             result.push(vertex)
//             adjecencyList[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     dfs(neighbor)
//                 }
//             });
//         }
//         dfs(start)
//         return result
//     }
// }


// const graph = new Graph()

// graph.addEdge('a' , 'b')
// graph.addEdge('b' , 'd')
// graph.addEdge('e' , 'f')

// console.log(graph.dfsRecursive('a'));





// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     dfsRecursive(vertex){
//          const result = []
//          const visited = {}
//          const adjacencyList = this.adjacencyList

//          function dfs(vertex){
//             if(!vertex) return null
//             visited[vertex] = true
//             result.push(vertex)
//             adjacencyList[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     dfs(neighbor)
//                 }
//             });
//          }

//          dfs(vertex)
//          return  result
//     }
// }

// const grph = new Graph()

// grph.addEdge('a', 'b')
// grph.addEdge('c', 'd')
// console.log(grph.adjacencyList);

// console.log('DFS',grph.dfsRecursive('a'));

// class Graph {
//     constructor(){``
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     dfsRecursive(vertex){
//         const result = []
//         const visited = {}
//         const adjacencyLIst = this.adjacencyList
//         function dfs(vertex){
//             if(!vertex) return null
//             visited[vertex] = true
//             result.push(vertex)
//             adjacencyLIst[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     dfs(neighbor)
//                 }
//             });
//         }
//         dfs(vertex)
//         return result
//     }
// }

// const graph = new Graph()

// graph.addEdge('s', 'g')
// graph.addEdge('c', 'm')
// graph.addEdge('k', 'l')

// console.log(graph.dfsRecursive('s'));




// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdge(vertex1 , vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//    dfsRecursive(vertex){
//     const result = []
//     const visited = {}
//     const adjacencyList = this.adjacencyList

//     function dfs(vertex){
//         if(!vertex) return null;

//         visited[vertex] = true
//         result.push(vertex)
//         adjacencyList[vertex].forEach(neighbor => {
//             if(!visited[neighbor]){
//                 dfs(neighbor)
//             }
//         });
//     }
//     dfs(vertex)
//     return result
//    }
// }



// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]= []
//         }
//     }

//     addEdge(vertex1, vertex2){
//         this.addVertex(vertex1)
//         this.addVertex(vertex2)
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     dfsRecursive(vertex){
//         let result = []
//         let visisted = {}
//         let adjacencyLIst = this.adjacencyList

//         function dfs(vertex){
//             if(!vertex) return null

//             visisted[vertex] = true
//             result.push(vertex)
//             adjacencyLIst[vertex].forEach(neighbor => {
//                 if(!visisted[neighbor])
//                     dfs(neighbor)
//             });        }
//             dfs(vertex)
//             return result
//     }
// }

// const graph = new Graph()

// graph.addEdge('s', 'g')
// graph.addEdge('c', 'm')
// graph.addEdge('k', 'l')

// console.log(graph.dfsRecursive('s'));






class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1 , vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    dfsRecursive(vertex){
        let result = []
        let visited = {}
        let adjecencyList = this.adjacencyList

        function dfs(vertex){
            if(!vertex ) return null

            visited[vertex] = true

            result.push(vertex)
            adjecencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            });
        }
        dfs(vertex)
        return result
    }
}


const graph = new Graph()

graph.addEdge('s', 'g')
graph.addEdge('c', 'm')
graph.addEdge('k', 'l')

console.log(graph.dfsRecursive('s'));



