// class Heap {
//   constructor() {
//     this.heap = []

//   }

//   insert(value) {
//     if (this.heap.length == 0) {
//       this.heap.push(value)
//     } else {
//       this.heap.push(value)                                                                             
//       this.heapifyUp()
//     }
//   }


//   heapifyUp() {
//     let index = this.heap.length - 1
//     let parant = Math.floor((index - 1) / 2)

//     while (index > 0 && this.heap[index] > this.heap[parant]) {
//       [this.heap[index], this.heap[parant]] = [this.heap[parant], this.heap[index]]
//       index = parant
//       parant = Math.floor((index - 1) / 2)
//     }

//   }
                         
//   remove() {
//     let max = this.heap[0]
//     this.heap[0] = this.heap.pop()                                                                                                                                                              
//     this.heapifyDown()
//   }
//   toGetLeft(index) {
//     return (2 * index) + 1
//   }
//   toGetRight(index) {
//     return (2 * index) + 2
//   }
//   heapifyDown() {

//     let index = 0;
//     let length = this.heap.length - 1
//     while (index < length && this.toGetLeft(index) < length) {
//       let large = this.toGetLeft(index)
//       if (this.toGetRight(index) < length && this.heap[large] < this.heap[this.toGetRight(index)]) {
//         large = this.toGetRight(index)

//       }

//       if (this.heap[index] < this.heap[large]) {
//         [this.heap[index], this.heap[large]] = [this.heap[large], this.heap[index]]
//         index = large
//       }
//     }
//   }
// }


// let hp = new Heap()
// hp.insert(30)
// hp.insert(20)
// hp.insert(10)
// hp.insert(50)
// hp.insert(70)

// console.log(hp)


// class Heap {
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         if(this.heap.length === 0){
//             this.heap.push(value)
//         }else{
//             this.heap.push(value)
//             this.heapifyUp()
//         }
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1
//         let parent = Math.floor((index - 1) / 2)

//         while(index > 0 && this.heap[index] > this.heap[parent]){
//             [this.heap[index] , this.heap[parent]] = [this.heap[parent] , this.heap[index]]

//             index = parent 
//             parent = Math.floor((index - 1) / 2)
//         }
//     }

//     remove(){
//         let max = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyUp()
//     }

//     toGetLeft(index){
//         return (2 * index) + 1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length - 1

//         while(index < length && this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             if(this.toGetRight(index) < length && this.heap[large] < this.heap[this.toGetRight(index)]){
//                 large = this.toGetRight(index)
//             }

//             if(this.heap[index] < this.heap[large]){
//                 [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]
//                 index = large
//             }
//         }
//     }
// }


// let hp = new Heap()
// hp.insert(30)
// hp.insert(20)
// hp.insert(10)
// hp.insert(50)
// hp.insert(70)
// hp.remove(70)

// console.log(hp)


// class Heap {
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         if(this.heap.length === 0){
//             this.heap.push(value)
//         }else{
//             this.heap.push(value)
//             this.heapifyUp()
//         }
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1
//         let parent = Math.floor((index - 1) / 2)

//         while(index > 0 && this.heap[index] > this.heap[parent]){
//             [this.heap[index] , this.heap[parent]] = [this.heap[parent] , this.heap[index]]

//             index = parent 
//             parent = Math.floor((index - 1 ) / 2 )
             
//         }
//     }
// }



// let hp = new Heap()
// hp.insert(30)
// hp.insert(20)
// hp.insert(10)
// hp.insert(50)
// hp.insert(70)

// console.log(hp)


// class Heap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp() {
//         let index = this.heap.length - 1;
//         let parent = Math.floor((index - 1) / 2);

//         while (index > 0 && this.heap[index] > this.heap[parent]) {
//             [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];

//             index = parent;
//             parent = Math.floor((index - 1) / 2);
//         }
//     }

//     remove() {
//         if (this.heap.length === 0) return null;

//         let max = this.heap[0];
//         this.heap[0] = this.heap.pop(); // Replace root with the last element
//         this.heapifyDown(); // Restore heap property by heapifying down
//         return max; // Return the removed max value
//     }

//     heapifyDown() {
//         let index = 0;
//         let length = this.heap.length;

//         while (this.toGetLeft(index) < length) {
//             let large = this.toGetLeft(index);
//             let right = this.toGetRight(index);

//             if (right < length && this.heap[right] > this.heap[large]) {
//                 large = right; // Choose the larger child
//             }

//             if (this.heap[index] >= this.heap[large]) break; // Heap property satisfied

//             [this.heap[index], this.heap[large]] = [this.heap[large], this.heap[index]];
//             index = large;
//         }
//     }

//     toGetLeft(index) {
//         return (2 * index) + 1;
//     }

//     toGetRight(index) {
//         return (2 * index) + 2;
//     }
// }

// // Example usage:
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);

// console.log(hp.heap); // [70, 50, 10, 20, 30]

// hp.remove(); // Removes 70

// console.log(hp.heap); // [50, 30, 10, 20]



