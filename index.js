// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null
//         this.size = 0 
//     }

//     isEmpty(){
//        return this.size === 0
//     }

//     gotSize(){
//         return this.size
//     }

//     prepend (value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append (value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node

//         }else {
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
            
//         }else {
//             let curr = this.head 
//             let listvalues = ''
//             while(curr){
//                 listvalues += `${curr.value} `
//                 curr = curr.next 
//             }
//             console.log(listvalues);
            
//         }
//     }
// }


// const list = new Linkedlist()


// list.append(15)

// list.prepend(10)



// list.prepend(30)
// list.prepend(20)
// list.print()
// console.log(list.gotSize());




// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }


//     isEmpty(){
//        return this.size === 0
//     }

//     gotSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else {

//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }



//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty");
            
//         }else{
//             let curr = this.head
//             let listvalues = ''
//             while(curr){
//                 listvalues += `${curr.value}    `
//                 curr = curr.next
//             }
//             console.log(listvalues);
            
//         }
//     }

// }

// const list = new Linkedlist()

// list.prepend(15)
// list.prepend(17)
// list.prepend(19)
// list.print()
// console.log(list.gotSize());



// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null 
//         this.size = 0 
//     }

//     isEmpty(){
//     return this.size === 0 
//     }
//     getSize(){
//         return this.size 
//     }

//     prepend(value){
//        const  node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 
//         }else{
//             node.next = this.head 
//             this.head = node 
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return 
//         }if(index === 0){
//             this.prepend(value)
//         }else{
//             let node = new Node(value)
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++

//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log(' list is empty ');
            
//         }else{
//             let curr = this.head
//             let listvalues = ''
//             while(curr){
//                 listvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues);
            
//         }
//     }
// }

// const list = new Linkedlist()

// list.append(10)
// list.prepend(12)
// list.prepend(20)
// list.append(22)
// list.insert(201 , 2)
// list.print()

// console.log(list.getSize());



// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class Linkedlist  {
//      constructor(){
//         this.head = null
//         this.size = 0   
//     }
//    isEmpty(){
//     return this.size === 0
//    } 
//    getSize(){
//     return this.size
//    }

//    prepend(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//     }else{
//         node.next = this.head
//         this.head = node
//     }
//     this.size++
//    }

//    insert(value , index){
//     if(index < 0 || index > this.size){
//         return
//     }if(index===0){
//         this.prepend(value)
//     }else{
//         const node = new Node(value)
//         let prev = this.head
//         for(let i = 0 ; i < index - 1 ; i++){

//             prev = prev.next
//         }
//         node.next = prev.next
//         prev.next = node
//         this.size++
//     }
//    }

//    append(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//     }else{
//         let prev = this.head
//         while(prev.next){
//             prev = prev.next
//         }
//         prev.next = node

//     }
//     this.size++
//    }

//    print(){
//     if(this.isEmpty()){
//         console.log('list is empty');
        
//     }else{
//         let curr = this.head
//         let listvalues= ''

//         while(curr){
//             listvalues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listvalues);
        
//     }
//    }

// }



// const list = new Linkedlist()

// list.prepend(11)
// list.prepend(21)
// list.append(201)
// list.prepend(31)
// list.append(101)
// list.prepend(41)
// list.prepend(11)
// list.insert(999 , 3)
// list.prepend(51)
// list.print()


// class Node {
//     constructor( value ){
//         this.value = value 
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){

//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 
//         }
//         else{
//             node.next  = this.head 
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//             const node = new Node(value)
//             if(this.isEmpty()){
//                 this.head = node
//             }else{
//                 let prev = this.head
//                 while(prev.next){
//                     prev = prev.next
//                 }
//                 prev.next = node
        
//             }
//             this.size++
//            }
           
//     insert(value , index){

//         if(index < 0 || index > this.size ){
//             return 
//         }
//         if(index === 0){
//             this.prepend(value)
//         }
//         else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++ ){
//                 prev = prev.next 
//             }
//             node.next  = prev.next 
//             prev.next = node
//             this.size++ 

//         }
//     }

//     print(){
//         if(this.isEmpty()){
//            console.log('list is empty');
           
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

// const list = new Linkedlist()


// list.prepend(11)
// list.prepend(21)
// list.append(201)
// list.prepend(31)
// list.append(101)
// list.prepend(41)
// list.prepend(11)
// list.insert(999 , 3)
// list.prepend(51)
// list.print()



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0 
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
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev =  this.head
//             while(prev.next){
//             prev = prev.next
//             }

//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
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
//         if(index < 0 || index >= this.size){
//             null
//         }
//         let removeNode
//         if(index === 0){
//             removeNode =this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }
    
//     print(){
//                 if(this.isEmpty()){
//                    console.log('list is empty');
                   
//                 }else{
//                     let curr = this.head
//                     let listedvalues = ''
//                     while(curr){
//                         listedvalues += `${curr.value} `
//                         curr = curr.next
//                     }
//                     console.log(listedvalues);
                    
//                 }
//             }
// }


// const list = new Linkedlist()

// list.prepend(32)
// list.prepend(27)
// list.prepend(89)
// list.append(189)
// list.append(289)
// list.append(123)
// list.insert(999 , 3)
// list.remove(0)
// list.print()



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null 
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//     }else{
//         node.next = this.head
//         this.head = node
//     }
//     this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev = node
            
//         }
//         this.size++
//     }

//        insert(value , index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
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


//     removeFrom(index){
//         if(index < 0 || index >= this.size){
//             return null
//         }
//         let removeNode
//         if(index === 0 ){
//             removeNode = this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }

//             removeNode = prev.next
//             prev.next = removeNode.next
            
//         }
//         this.size--
//         return removeNode.value
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty ');
            
//         }else{
//             let curr = this.head 
//             let listvalues = ''
//             while(curr){
//                 listvalues += `${curr.value} `
//                 curr = curr.neaxt
//             }

//             console.log(listvalues);
//         }
        
//     }

// }


// const list = new Linkedlist()

// list.prepend(32)
// list.prepend(27)
// list.prepend(89)
// list.append(189)
// list.append(289)
// list.append(123)
// // list.insert(999 , 3)
// // list.removeFrom(0)
// list.print()






// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
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
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i =0 ; i < index - 1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node 
//             this.size++
//         }
//     }

//     remove(index){
//         if(index < 0 || index >= this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){

//             removeNode=this.head
//             this.head = this.head.next
//         }else{
//             let prev =  this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }

//             removeNode = prev.next
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let curr = this.head
//         let i = 0
//         while(curr){
//             if(curr.value == value)
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
            
//         }else{
//             let curr = this.head
//             let listvalues = ''
//             while(curr){
//                 listvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues);
            
//         }
//     }
// }



// const list = new Linkedlist()

// list.prepend(39)
// list.prepend(20)
// list.append(45)
// list.append(67)
// list.insert(876,2)
// list.remove(2)
// list.print()


// let arr = [11,23,21,23,0,44,21]


// function replace(arr){
//    let ar = 0 
//     for(let i = 0 ; i < arr.length ; i++){
       
//         ar += arr[i] 
      
        
//     }
//     return ar
// }
// console.log(replace(arr));



// let string = ['a', 's', 'd', 'f', 'e', 'i', 'o', 'u'];

// function vowelsRemove(string) {
//     let result = [];
//     let vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let i = 0; i < string.length; i++) {
//         if (!vowels.includes(string[i])) {
//             result.push(string[i]);
//         }
//     }

//     return result;
// }

// console.log(vowelsRemove(string)); 



// function sum(n){
//     if(n<=0){
//         return 0
//     }
//     return n + sum(n-1)
// }

// console.log(sum(5));





// function findTheSecondLargest(arr){
//     if(arr.length<2){
//         return null
//     }else{

//         let first = -Infinity
//         let second = -Infinity

//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>first){
//                 second = first
//                 first = arr[i]
//             }else if(arr[i] > second && arr[i] != first){
//                 second = arr[i]
//             }
//         }

//         return second
//     }
// }

// console.log(findTheSecondLargest([1,5,3,5,2,8,6]));

// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null
//         this.size = 0 
//     }

//     isEmpty(){
//         return this.size === 0 
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

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next 
//             }
//             prev.next = node
//             this.size++
//         }
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
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
//         if(index < 0 || index >= this.size){
//             return null
//         }
//         let removeNode
//         if(index === 0){
//             removeNode = this.head
//             this.head = this.head.next
//         }else{

//             let prev = this.head
//             for(let i  = 0  ; i  < index - 1 ; i++){
//                 prev=prev.next
//             }
//         removeNode = prev.next
//         prev.next = removeNode.next

//         }
//         this.size--
//         return removeNode.value
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


// const list = new Linkedlist()

// list.prepend(20)
// list.prepend(27)
// list.prepend(25)
// list.append(250)
// list.prepend(22)
// list.prepend(23)
// list.insert(999 , 3)
// list.remove(3)
// list.print()



// function evenSum(n){
//     if(n<0){
//         return 0
//     }

//     if(n % 2 ==0){
//         return n + evenSum(n - 2)
//     }else{
//         return evenSum(n - 1)
//     }

// }

// console.log(evenSum(10))


// function sum(n){
//     if(n< 0 ){
//         return 0
//     }
//     return n + sum(n - 1)
// }

// console.log(sum(5));


// function stringlength(str){
//     if(str==""){
//         return 0 
//     }
//     return 1 + stringlength(str.substring(1))
// }

// console.log(stringlength("hello"));



// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     insert(value, index){

//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index ===  0){
//             this.prepend(value)
//         }
//         else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node

//         }
//     }

//     remove(index){
//         if(index<0 || index >= this.size){
//             return null
//         }
//         let removeNode
//         if(index ===0){
//             removeNode = this.head
//             this.head = this.head.next

//         }
//         else{
//             let prev = this.head
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next

//         }
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head 
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next

//         }
//         this.head = prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
//         }
//         else{

//             let curr = this.head
//             let listvalues = ''

//             while(curr){
//                 listvalues += `${curr.value} `
//                 curr = curr.next

//             }
//             console.log(listvalues);
            
//         }
//     }
// }


// const list = new Linkedlist()

// list.prepend(23)
// list.prepend(23)

// list.print()



// function fact ( n ){
//     if(n <= 0 ){
//         return 1
//     }

//     return n * fact(n - 1)
// }

// console.log(fact(5));




// let str = 'hello qordd'

// function reverse(str , l){
// if(l<0){
//     return ""
// }

// return `${str}` + reverse(str  ,l )
// }

// let str = 'hello world'

// function string(str,l){

//     
//     if(l<0){
//         return ''
//     }
//     return `${str[l]}`+string(str,l)

// }

// console.log(string(str,str.length));




// function sum (value){
//     if(value < 0){
//         return 0 
//     }
    
//     return value + sum(value - 1)
// }

// console.log(sum(10));



// function binarysearch(arr,t){
// let left = 0 
// let right = arr.length - 1

// while(left < right ){
//     let middle = Math.floor((left + right) / 2)
//     if(arr[middle] === t){
//         return middle
//     }
//     if(t <arr[middle]){
//         right = middle-1
//     }
//     if(t > arr[middle]){
//         left = middle+1
//     }
     
// }
// return -1
// }
// console.log(binarysearch([1,2,3,4,5,6,7,8],2))



// function binarysearch(arr,t){
//     return  search(arr,t,0,arr.length-1)
// }

// function search(arr,t,left,right){
//     if(left > right){
//         return -1
//     }
//     let middle = Math.floor((left + right)/2)

//     if(arr[middle] === t){
//         return middle
//     }
//     if(t < arr[middle]){
//         return search(arr,t,left,middle-1)
//     }else if(t > arr[middle]){
//         return search(arr,t,middle+1,right)
//     }
// }

// console.log(binarysearch([1,2,3,4,5,6,7,8],6))



// function sum(n){
//     if(n < 0 ){
//         return 0
//     }
// if(n % 2 == 0){
//     return n += sum(n - 2)
// }else{
//     return sum(n - 1)
// }
// }

// console.log(sum(8));


// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false; 
//         }
//         left++;
//         right--;
//     }
//     return true; 
// }

// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello"));   


// let arr = 'hello world'
// function reverse(str , l){
//    if(l < 0 ){
//     return ""
//    }


//     return `${str[l]}` + reverse( str , l)
// }

// console.log(reverse(arr , arr.length - 1));



// remove(index){
//     if(index < 0 || index >= this.size){
//         return null
//     }

//     let removeNOde
//     if(index === 0){
//         removeNOde = this.head
//         this.head = this.head.next
//     }else{
//         let prev = this.head
//         for(let i = 0 ; i < index - 1 ; i++){
//             prev = prev.next
//         }
//         removeNOde = prev.next
//         prev.next = removeNOde.next
//     }
// }

// search ( value){
//     if(isepmty()){
//         return - 1
//     }else {
//         let i  = 0 ; 
//          let curr = this.head
//          while( curr){
//             if(curr == value){
//                 return i 
//             }
//             curr = curr.next
//             i++
//          }
//          return - 1
//     }
// }


// search ( value ){
//     if( is empty ( )){
//         return - 1
//     }else {
//         let i = 0 
//         let curr =  this.head 
//         while ( curr){
//             if ( curr == value ){
//                 return i 
//             }
//             curr = curr.next 
//             i++
//         }
//         return -1   
//     }
// }


// function binarysearch(arr , t){
//     let left = 0 
//     let right = arr.length
//     while(left <= right ){
//         let middle = math.floor((left + right) / 2)
//         if(t === arr[middle]){
//             return middle
//         }
//         if(target < arr[middle]){
//             right = middle - 1
//         }else{
//             left = middle + 1
//         }
//     }
//     return - 1
// }



// class ListNode {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   function arrayToLinkedList(arr) {
//     if (arr.length === 0) return null; // Return null for an empty array
  
//     let head = new ListNode(arr[0]);  // Create the head node
//     let current = head;
  
//     for (let i = 1; i < arr.length; i++) {
//       current.next = new ListNode(arr[i]);  // Create and link nodes
//       current = current.next;
//     }
  
//     return head;
//   }
  
//   // Helper function to print the linked list
//   function printLinkedList(head) {
//     let current = head;
//     let result = [];
//     while (current) {
//       result.push(current.value);
//       current = current.next;
//     }
//     console.log(result);
//   }
  
//   let arr = [1, 2, 3, 4];





// let str = 'hello world'

// function reverseString(str , l){

//     if( l < 0){
//         return ""
//     }

//     return `${str[l]}` + reverseString(str , l )
// }
  

// console.log(reverseString(str , str.length));




// function binarysearch(arr , target){
//     let left = 0
//     let right = arr.length - 1

//     while(left <= right){
//         let middle = Math.floor((left + right) / 2)

//         if(target === arr[middle]){
//             return middle
//         }

//         if(target < arr[middle]){
//             right = middle - 1
//         }else{
//             left = middle + 1
//         }
//     }
//     return - 1
// }

// console.log(binarysearch([1,2,3,4,5,6,7,8], 4));



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head = null
//        this.size = 0
//     }

//     isEmpty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }


//     prepend(value){
//         const node  = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }

//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++

//     }

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = prev
//             prev = curr.next
//             curr.next = prev
//             prev = next 

//         }
//         this.head = curr
//     }


//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
            
//         }else{
//             let curr = this.head
//             let listvalues = ''

//             while(curr){
//                 listvalues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listvalues);
            
//         }
//     }


// }

// const list = new Linkedlist()

// list.prepend(23)
// list.prepend(27)
// list.prepend(65)
// list.prepend(42)
// list.reverse()
// list.print()




// const str = "hello world"

// function reverse(str , l ){
//     if(l<0){
//         return ""
//     }

//     return `${str[l]}` + reverse(str , l)
// }

// console.log(reverse(str , str.length-1));

// let arr = 'hello world'
// function reverse(str , l){
//    if(l < 0 ){
//     return ""
//    }


//     return `${str[l]}` + reverse( str , l)
// }

// console.log(reverse(arr , arr.length - 1));



// let str = 'hello world'

// function reverseString(str , l){

//     if( l < 0){
//         return ""
//     }

//     return `${str[l]}` + reverseString(str , l-1 )
// }
  

// console.log(reverseString(str , str.length-1));



// class Node{
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
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

//     append(value){
//         const node = new Node(value)
//        if(this.isEmpty()){
//         this.head = node
//        } 
//        else{
//         let prev = this.head
//         while(prev.next){
//             prev = prev.next
//         }
//         prev.next = node
//         this.size++
//        }

//     }

//     insert(value , index){
//         if(index < 0 || index >= this.size){
//             return -1
//         }
        
//         if(index === 0){
//            this.head = node
//         }else{
//         const node =new Node(value)
//            let prev = this.head
//            for(let i = 0 ; i < index-1 ; i++){
//             prev = prev.next
//            } 
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     // remove(index) {
//     //     if (index < 0 || index >= this.size) {
//     //         return -1;
//     //     }
//     //     let removedNode;
//     //     if (index === 0) {
//     //         removedNode = this.head;
//     //         this.head = this.head.next;
//     //     } else {
//     //         let prev = this.head;
//     //         for (let i = 0; i < index - 1; i++) {
//     //             prev = prev.next;
//     //         }
//     //         removedNode = prev.next;
//     //         prev.next = removedNode.next;
//     //     }
//     //     this.size--;
//     //     return removedNode.value;
//     // }

//   reverse() {
//     let prev = null;
//     let curr = this.head;  
//     while (curr) {
//         let next = curr.next;  
//         curr.next = prev;  
//         prev = curr;  
//         curr = next;  
//     }
//     this.head = prev;  
// }

    

//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
            
//         }
//         let curr = this.head 
//          let listvalues = ''
//          while(curr){
//             listvalues += `${curr.value} `
//             curr = curr.next
//          }
//          console.log(listvalues);
         
//     }
// }

// const list = new Linkedlist()

// list.prepend(87)
// list.prepend(54)
// list.append(13)
// list.prepend(22)
// list.insert(89 ,1)   
// // list.remove(2)
// list.reverse()       
// list.print()




// function fact(n){
//     if(n <= 0 ){
//         return 1
//     }
//     return n * fact(n-1)
// }

// console.log(fact(10));



// function binarysearch(arr , t ){
//     let left = 0
//     let right = arr.length -1
//     while(left <= right){
//         let middle = Math.floor((left + right) / 2)
//         if(t === arr[middle]){
//             return middle
//         }
//         if(t < arr[middle]){
//             right = middle - 1
//         }else{
//             left = middle + 1
//         }
//     }
//     return - 1

// }


// console.log(binarysearch([2,3,4,5,6,7,8], 7));


// function binarysearch( arr , t , left = 0 , right = arr.length -1){
//     if(left > right ){
//         return - 1
//     }

//     let middle = Math.floor((left + right) / 2)

//     if(t === arr[middle]){
//         return middle
//     }

//     if( t < arr[middle]){
//         return binarysearch(arr , t ,left , right = middle -1)
//     }else{
//         return binarysearch(arr , t , left = middle + 1 , right)
//     }
// }


// console.log(binarysearch([1,2,3,4,5,6,7], 6));



// class Node {
//     constructor(value){
//         this.value = value 
//         this.next = null
//     }
// }

// class  linkedList {
//     constructor(){
//         this.head = null 
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
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
//         this.size ++
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
//             this.head = node
//         }else{
//             const node = new Node(value)
//             let prev = this.head

//             for(let i =0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++

//         }
//     }

//     append(value){

//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node 

//         }
//         else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node 

//         }
//         this.size++
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next =  curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     remove(index){
//         if(index <= 0 || index > this.size){
//             retrun -1
//         }
//         let removeNode
//         if(index === 0 ){
//            removeNode = this.head
//            this.head = this.head.next
//         }else{
//             let prev = this.head 
//             for(let i = 0 ; i < index - 1 ; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next 
//             prev.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
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

// list.prepend(1)
// list.prepend(2)
// list.prepend(4)
// list.insert(8 , 1)
// list.reverse()
// list.remove(2)
// list.print()



// let str='malayalam'
// function palindrome( str , l){
//     if(l <= 1 ){
//         return true
//     }

//     if(str[0] === str[l-1]){

//         return palindrome(str.substring(1, l -1), l-2)
//     }
//     return false
// }

// console.log(palindrome( str, str.length));




// let str = 'malayalam'

// function palindrome( str , l ){
//     if(l <= 0 ){
//         return true
//     }

//     if(str[0] === str[l - 1]){
//         return palindrome(str.substring(1 , l-1), l-2)
//     }
//     return false
// }

// console.log(palindrome(str , str.length));

// let arr = [2,3,4,5,10,7,1,2]

// function secondlargest(arr){
//     let largest = arr[0]
//    let secondlargest = -1
// for(let i = 0 ; i < arr.length  ; i++){
    
//     if(arr[i] > largest){
       
//         largest = arr[i]
//     }else if(arr[i] > secondlargest && arr[i] !== largest){
//         secondlargest= arr[i]
//     }
// }
// return largest 
// }

// console.log(secondlargest(arr));



// let str = 'malayabglam'

// function palindrome(str , l){
// if(l<=0){
//     return true
// }

// if(str[0]===str[l-1]){
//     return palindrome(str.substring(1,l-1) , l-2)
// }
// return false
// }





// let str = ' malayalam'
// function palindrome ( str , l){
//     if(l<=0){
//         return true
//     }
    
//     if(str[0] === str[l-1]){
//         return palindrome(str.substring(1,l-1),l-2)
//     }
//     return false
// }
// console.log(palindrome(str , str.length));


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


// let str = 'datatworld'

// function reverse(str , l){
//     if(l<0){
//         return ''
//     }
//     return `${str[l]}` + reverse(str ,l-1)
// }

// console.log(reverse(str , str.length-1));


// search(arr, target){
//     let curr = this.head
//     let i = 0 
//     while(curr){
//         if(curr === target){
//             return i
//         }
//         curr=curr.next 
//         i++
//     }

   
   
//     if(i === arr[i]){
//        let prev = i
//         Node.next = prev.next
//         prev.next = Node
//     }
    
// }


// function sum(n){
//     if(n<0){
//         return -1
//     }

//     return n + sum(n - 1)
// }

// console.log(sum(5));


// function binarysearch(arr , t){
//     let left = 0 
//     let right = arr.length - 1
//     while(left<= right){
//         let middle = Math.floor((left + right) / 2)

//         if(t === arr[middle]){
//             return middle
//         }

//         if(t < arr[middle]){
//             right = middle -1
//         }else{
//             left = middle +1
//         }
//     }
// }




// remove(index){
//     if(index <= 0 || index > this.size){
//         return -1
//     }

//     let removeNode
//     if(index === 0){
//         removeNode = this.Head
//         this.head = this.head.next
//     }else{

//        let prev = this.head
//        for(let i = 0 ; i < index-1 ; i++){
//         prev = prev.next
//        }
//        removeNode = prev.next
//        prev.next = removeNode.next

//     }
// }








// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i = 0 ; i < arr.length-1 ; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp 
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }



// function bubbleSort(arr){
//     for(let i = 0 ; i < arr.length - 1 ; i++){
//         for(let j = i+1 ; j < arr.length - 1 ; j++){
//             if(arr[i] > arr[j] ){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }


// let arr = [-3,1,4,6,-1,8]
// bubbleSort(arr)
// console.log(arr);









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
//         let newNode = new Node(value)

//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root , newNode)
//         }

//     }

//     insertNode(root , newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 console.log(root.left.value,'root.left.value');
                
//                 this.insertNode(root.left  , newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
                
//                 this.insertNode(root.right , newNode)
//             }
//         }
//     }


// }



// const bts = new binarySearchTree()

// bts.insert(5)
// bts.insert(3)
// bts.insert(4)
// bts.insert(6)
// bts.insert(9)





class Node {
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class binarySearchTree{
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
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){
        if(newNode.value < root.value){
            if(this.left === null){
                this.left = newNode
            }else{
                this.insertNode(root.left , newNode)
            }
        }
    }
}