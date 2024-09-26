

// class hashtable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

// const { log, table } = require("console");
// const { hash } = require("crypto");
// const { get } = require("http");

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i); 
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         this.table[index] = value;
//     }

//     get(key) {
//         const index = this.hash(key);
//         return this.table[index]; 
//     }

//     remove(key) {
//         const index = this.hash(key);
//         this.table[index] = undefined; 
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// const table = new hashtable(50);

// table.set('name', 'bahir');
// table.set('age', 25);
// table.set('place', 'malappuram');
// table.display();

// console.log('Get age:', table.get('age'));
// table.remove('place');
// console.log('After removing place:');
// table.display();



// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i = 0 ; i < key.length ; i++){
//             total += key.charCodeAt(i); 
//         } 
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }


//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         for(let i = 0 ; i < this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }

// const table = new hashtable(50)

// table.set('name', 'siraj')
// table.set('age',24)


// console.log(table.get('age'));
// table.remove('name')
// table.display()



// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
    
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         for(let i = 0 ; i < this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }


// const table = new hashtable(50);

// table.set('name', 'siraj');
// table.set('age', 24);

// console.log(table.get('age'));
// table.remove('name');
// table.display();




// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i = 0 ; i < key.length ; i++){
//             total += key.charCodeAt(i); 
//         } 
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }


//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         for(let i = 0 ; i < this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }

// const table = new hashtable(50)

// table.set('name', 'siraj')
// table.set('age',24)


// console.log(table.get('age'));
// table.remove('name')
// table.display()



// class hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size 
//     }

//     hash(key){
//         let total = 0
//         for(let i = 0  ; i < key.length ; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key , value ){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         for(let i = 0 ; i < this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
                
//             }
//         }
//     }
// }


// const table = new  hashtable(50)

// table.set('place' , 'malappuram')
// table.set('name' , 'siraj')
// table.set('age' , 60)
// table.set('state' , 'kerala')
// table.set('phone' , 7673872472)
// table.set('phone' , 'valancher')

// table.display()
// // console.log(table.get('place'));

// // table.remove('age')



