

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size ===0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 
//         }else{
//             node.next = this.head
//             this.head = node 
//         }
//         this.size++
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return 
//         }
//         if(index === 0 ){
//             this.prepend(value)
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     remove(index){
//         if(index <= 0 || index > this.size){
//             return - 1
//         }

//         let removedNode 
//         if(index === 0 ){
//             removedNode = this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             removedNode = prev.next
//             prev.next = removedNode.next
//         }
//         this.size--
//     }

//     reverse(){
//         let curr = this.head
//         let prev = null
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     search(value){
//         if(this.isEmpty()){
//             return - 1
//         }else{
//             let i = 0 
//             let curr = this.head
//             while(curr){
//                 if(curr.value === value){
//                     return i
//                 }
//                 curr = curr.next
//                 i++
//             }
//             return -1 
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
            
//         }else{
//             let curr = this.head
//             let listedvalues = ''
//             while(curr){
//                 listedvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listedvalues);
            
//         }
//     }
// }

// const list = new linkedList()

// list.prepend(8)
// list.prepend(9)
// list.prepend(4)
// list.insert(5,1)
// list.reverse()
// console.log(list.search(4));

// list.print()
