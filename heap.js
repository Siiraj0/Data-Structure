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
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         if(this.heap.length === 0){

//             this.heap.push(value); 
//         }else{

//             this.heap.push(value); 
//             this.heapifyUp();
//         }
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

//     removeSpecific(value) {
//         const index = this.heap.indexOf(value);

//         if (index === -1) return; 

//         [this.heap[index], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]];
       
//         this.heap.pop();

//         this.heapifyDown(index);
//         this.heapifyUp(index); 
//     }


//     toGetLeft(index) {
//         return (2 * index) + 1;
//     }

//     toGetRight(index) {
//         return (2 * index) + 2;
//     }

//     heapifyDown() {
//         let index = 0;
//         let length = this.heap.length; 

//         while (this.toGetLeft(index) < length) { 
//             let large = this.toGetLeft(index);
//             let right = this.toGetRight(index);

//             if (right < length && this.heap[right] > this.heap[large]) {
//                 large = right; 
//             }

//             if (this.heap[index] >= this.heap[large]) break; 

//             [this.heap[index], this.heap[large]] = [this.heap[large], this.heap[index]]; 
//             index = large;
//         }
//     }
// }




// let hp = new Heap()
// hp.insert(30)
// hp.insert(20)
// hp.insert(10)
// hp.insert(50)
// hp.insert(70)
// hp.removeSpecific(70)

// console.log(hp)



// class Heap{
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

//     remove(value){
//         const index = this.heap.indexOf(value)

//         if(index === -1){
//             return
//         }

//         [this.heap[index] , this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]]

//         this.heap.pop()

//         this.heapifyUp(index)
//         this.heapifyDown(index)
//     }

//     toGetLeft(index){
//         return (2*index) + 1
//     }

//     toGetRight(index){
//         return (2*index) + 1
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right < length && this.heap[right] > this.heap[large]){
//                 large = right 
//             }

//             if(this.heap[index] >= this.heap[large]) break ;

//             [this.heap[index],this.heap[large]] = [this.heap[large] , this.heap[index]]
//             index = large
//         }
//     }
// }


// const hp = new Heap()

// hp.insert(13)
// hp.insert(33)
// hp.insert(37)
// hp.insert(43)
// hp.insert(16)
// console.log(hp);
// hp.remove(37)
// console.log(hp);



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

//     remove(value){
//         let index = this.heap.indexOf(value)

//             if(index === -1) return;

//             [this.heap[index] , this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1] , this.heap[index]]

//             this.heap.pop()

//             this.heapifyUp(index)

//             this.heapifyDown(index)
        
//     }

//     toGetLeft(index){
//         return (2*index) +1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right < length && this.heap[right] > this.heap[large]){
//                 large = right
//             }

//             if(this.heap[index] >= this.heap[large]) break;

//             [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]

//             index = large
//         }
//     }

//     heapSort() {
//         const sorted = [];
//         while (this.heap.length > 0) {
//             // Remove the max element (root) and push it to sorted array
//             sorted.push(this.heap[0]);
//             this.remove(this.heap[0]); // Remove root and restore heap
//         }
//         return sorted.reverse(); // Reverse to get ascending order
//     }
  
// }


// let hp = new Heap()
// hp.insert(30)
// hp.insert(20)
// hp.insert(10)
// hp.insert(50)
// hp.insert(70)
// console.log(hp);

// hp.remove(70)

// console.log(hp)

// console.log(hp.heapSort(),'sorted');



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
//         let index = this.heap.length-1
//         let parent = Math.floor((index - 1) / 2)

//         while(index > 0 && this.heap[index] > this.heap[parent]){
//             [this.heap[index] , this.heap[parent]] = [this.heap[parent] , this.heap[index]]

//             index = parent
//             parent = Math.floor((index-1) / 2)
//         }
//     }

//     remove(value){
//         let index = this.heap.indexOf(value)

//         if(index === -1) return

//         [this.heap[index], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]]

//         this.heap.pop()

//         this.heapifyUp(index)
//         this.heapifyDown(index)
//     }

//     toGetLeft(index){
//         return (2*index) + 1
//     }

//     toGetRight(index){
//         return (2*index) + 2
//     }


//     heapSort(){
//         const sorted = []

//         while(this.heap.length > 0){
//             sorted.push(this.heap[0])
//             this.remove(this.heap[0])
//         }
//         return sorted.reverse()
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right < length && this.heap[right] > this.heap[large]){
//                 large = right
//             }
//             if(this.heap[index] >= this.heap[large]) break

//             [this.heap[index] , this.heap[large]] = [ this.heap[large] , this.heap[index]]

//             index = large
//         }
//     }
// }

// // Example usage
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);
// console.log("Heap before removing :", hp);

// hp.remove(70);
// console.log("Heap after removing 70:", hp);

// console.log("Sorted array:", hp.heapSort());






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
//             [this.heap[index] , this.heap[parent]] = [this.heap[parent], this.heap[index]]

//             index = parent
//             parent = Math.floor((index-1) / 2)
//         }
//     }

//     remove(value){
//         const index = this.heap.indexOf(value)

//         if(index === -1)return;

//         [this.heap[index] , this.heap[this.heap.length - 1]] = [this.heap[this.heap.length-1], this.heap[index]]

//         this.heap.pop()

//         this.heapifyUp(index)
//         this.heapifyDown(index)
//     }

//     toGetLeft(index){
//         return (2 * index) + 1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right < length && this.heap[right] > this.heap[large]){
//                 large = right 
//             }

//             if(this.heap[index] >= this.heap[large]) break;

//             [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]
//             index = large
//         }
//     }

//     heapSort(){
//         const sorted = []

//         while(this.heap.length > 0){
//             sorted.push(this.heap[0])
//             this.remove(this.heap[0])
//         }
//         return sorted.reverse()
//     }
// }

// // Example usage
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);
// console.log("Heap before removing 70:", hp);

// hp.remove(70);
// console.log("Heap after removing 70:", hp);

// console.log("Sorted array:", hp.heapSort());




// class Heap {
//     constructor(){
//         this.heap  = []
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
//         let parent = Math.floor((index-1) / 2)

//         while(index > 0 && this.heap[index] > this.heap[parent]){
//             [this.heap[index] , this.heap[parent]] = [this.heap[parent] , this.heap[index]]
//             index = parent
//             parent = Math.floor((index - 1) / 2)
//         }
//     }

//     remove(value){
//         let index = this.heap.indexOf(value)

//         if(index === -1) return;

//         [this.heap[index] , this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[index]]

//         this.heap.pop()

//         this.heapifyDown(index)
//         this.heapifyUp(index)
//     }

//     toGetLeft(index){
//         return (2 * index) + 1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right < length && this.heap[right] > this.heap[large]){
//                 large = right
//             }

//             if(this.heap[index] >= this.heap[large]) break;


//                 [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]
//                 index = large
            
//         }
//     }

//     heapSort(){
//        const sorted = []

//        while(this.heap.length > 0){
//         sorted.push(this.heap[0])
//         this.remove(this.heap[0])
//        }
//        return sorted.reverse()
//     }
// }


// // Example usage
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);
// console.log("Heap before removing 70:", hp);

// hp.remove(70);
// console.log("Heap after removing 70:", hp);

// console.log("Sorted array:", hp.heapSort());


// class Heap{
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
//             index= parent
//             parent = Math.floor((index - 1) / 2)
//         }
//     }

//     remove(value){
//         let index = this.heap.indexOf(value)

//         if(index === -1){
//             return 
//         }

//         [this.heap[index] , this.heap[this.heap.length - 1]] = [ this.heap[this.heap.length - 1] , this.heap[index]]

//         this.heap.pop()

//         this.heapifyUp(index)
//         this.heapifyDown(index)
//     }

//     toGetLeft(index){
//         return (2 * index) + 1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length
//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right <  length && this.heap[right] > this.heap[large]){
//                 large = right
//             }

//             if(this.heap[index] >= this.heap[large]) break

//             [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]

//             index = large
//         }
//     }

//     heapSort(){
//         let sorted = []
//         while(this.heap.length > 0){
//             sorted.push(this.heap[0])
//             this.remove(this.heap[0])
//         }
//         return sorted
//     }
// }

// // Example usage
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);
// console.log("Heap before removing 70:", hp);

// hp.remove(70);
// console.log("Heap after removing 70:", hp);

// console.log("Sorted array:", hp.heapSort());

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

//     remove(value){
//         let index = this.heap.indexOf(value)

//         if(index === -1) return

//         [this.heap[index] , this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[index]]

//         this.heap.pop()

//         this.heapifyUp(index)
//         this.heapifyDown(index)
//     }

//     toGetLeft(index){
//         return ( 2 * index) + 1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//                 if(right < length && this.heap[right] > this.heap[large]){
//                     large = right
//                 }

//                 if(this.heap[index] >= this.heap[large]) break

//                 [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]
//                 index = large
            
//         }
//     }
    

//     heapSort(){
//         let sorted = []

//         while(this.heap.length > 0){
//             sorted.push(this.heap[0])
//             this.remove(this.heap[0])
//         }
//         return sorted.reverse()
//     }
// }

// // Example usage
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);
// console.log("Heap before removing 70:", hp);

// hp.remove(70);
// console.log("Heap after removing 70:", hp);

// console.log("Sorted array:", hp.heapSort());


// class Heap{
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

//     remove(value){
//         let index = this.heap.indexOf(value)
//         if(index === -1) return

//         [this.heap[index],this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1]]

//         this.heap.pop()

        
//         this.heapifyDown(index)
//         this.heapifyUp(index)
//     }

//     toGetLeft(index){
//         return (2 * index) + 1
//     }

//     toGetRight(index){
//         return (2 * index) + 2
//     }

//     heapifyDown(){
//         let index = 0
//         let length = this.heap.length

//         while(this.toGetLeft(index) < length){
//             let large = this.toGetLeft(index)
//             let right = this.toGetRight(index)

//             if(right < length && this.heap[right] > this.heap[large]){
//                 large = right
//             }

//             if(this.heap[index] >= this.heap[large]) break

//             [this.heap[index] , this.heap[large]] = [this.heap[large] , this.heap[index]]

//             index = large
//         }
//     }

//     heapSort(){
//         let sorted = []

//         while(this.heap.length > 0){
//             sorted.push(this.heap[0])
//             this.remove(this.heap[0])
//         }
//         return sorted
//     }
// }

// // Example usage
// let hp = new Heap();
// hp.insert(30);
// hp.insert(20);
// hp.insert(10);
// hp.insert(50);
// hp.insert(70);
// console.log("Heap before removing 70:", hp);

// hp.remove(70);
// console.log("Heap after removing 70:", hp);

// console.log("Sorted array:", hp.heapSort());


// const arr = [3,4,6,2,1,7,9,10,2]

// function heapSort(arr){

//     let n = arr.length
//     for(let i = Math.floor(n - 1/2);i>=0;i--){
//         heap(arr,n,i)
//     }
//     for(let i = n-1;i>=0;i--){
//         [arr[0] , arr[i]] = [arr[i], arr[0]]
//         heap(arr,i,0)
//     }
// }

// function heap(arr,n,i){
//     let largest = i
//     let left = (i * 2) + 1
//     let right = (i * 2) + 2

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }
//     if(right < n && arr[right] > arr[largest]){
//         largest = right
//     }

//     if(largest !==i){
//         [arr[largest] , arr[i]] = [arr[i] , arr[largest]]
//         heap(arr,n,largest)
//     }
// }
// heapSort(arr)
// console.log(arr
