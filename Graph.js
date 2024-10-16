// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

    
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



class Graph {

    constructor(){
        this.adjacencyLIst = {}

    }

    addVertex(vertex){
        if(!this.adjacencyLIst[vertex]){
            this.adjacencyLIst[vertex] = []
        }
    }

    addEdge(vertex1 , vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacencyLIst[vertex1].push(vertex2)
        this.adjacencyLIst[vertex2].push(vertex1)
    }
}

const grph = new Graph()

grph.addEdge('a' , 'x')
grph.addEdge('a' , 'c')
grph.addEdge('k' , 'm')
console.log(grph.adjacencyLIst);

