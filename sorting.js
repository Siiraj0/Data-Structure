
// function insertionSort(arr){
//     for(let i = 1 ; i < arr.length ; i++){
//         let insertion = arr[i]
//         let j = i-1
//         while(j >=0 && arr[j] > insertion){
//             arr[j+1] = arr[j]
//             j= j-1
//         }
//         arr[j+1] = insertion
//     }
// }


// let arr =[2,-8,5,3,8,-2]

// insertionSort(arr)
// console.log(arr);



// function bubbleSort(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i+1 ; j < arr.length ; j++){

//             if(arr[i] > arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// let arr =[2,-8,5,3,8,-2]

// bubbleSort(arr)
// console.log(arr);

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left =  []
//     let right = []
//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else{
//         left.push(arr[i])      
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const arr = [1,2,5,3,2,8,-2,6,5,3]
// console.log(quickSort(arr));






// function insertionSort(arr){
//     for(let i = 1 ; i< arr.length ; i++){
//         let insertion = arr[i]
//         let j = i-1
//         while(j >=0 && arr[j] > insertion){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = insertion
//     }
//     return arr
// }

// let arr = [2,4,5,1,5,7,-2]

// console.log(insertionSort(arr));




// function bubbleSort(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = 0 ; j < arr.length ; j++){
//             if(arr[i] < arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// let arr = [2,1,4,3,6,-3]
// bubbleSort(arr)
// console.log(arr);





// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0 ; i<arr.length-1 ; i++){
//         if(arr[i] < pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [2,1,5,4,8,7,-2]

// console.log(quickSort(arr));




// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     console.log(mid,'mid ---');
    
//     let left = arr.slice(0,mid)
//     console.log(left,'left i +++++++++++++');
    
//     let right = arr.slice(mid)
//     console.log(right,'right-----------------');

    
//     return merge(mergeSort(left) , mergeSort(right))
// }

// function merge(left , right){
//     console.log(left,'left in merge()------');
//     console.log(right,'right in meget +++++++++++++');
    
    
//     const sortedArr = []
//     console.log(sortedArr,'sorted Array in merge ');
    
//     while(left.length && right.length){
//         console.log(left,'left in while condition');
//         console.log(right,'right in while condition ');
        
        
//         console.log(left[0],'left[0]',right[0],'right[0]');
//         if(left[0] <= right[0]){
            
//             sortedArr.push(left.shift())
//             console.log(sortedArr,'sorted array in if condition $$$$$$$$');
//             console.log(left,'left array in if condition $$$$$$$$$');
            
            
//         }else{
//             sortedArr.push(right.shift())
//             console.log(sortedArr,'sorted array in else condition %%%%%%%%%%');
//             console.log(right,'right in else condition %%%%%%%%%%%%%%%%');
            
            
//         }
//     }
//     console.log(sortedArr,'sorted arr @@@@@@@@@@@@@@@@@@@@@@@');
    
//     return [...sortedArr,...left,...right]
// }

// const arr = [2,3,4,3,2,-5,-1]
// console.log(mergeSort(arr));



// function selectionSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i; 
      
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j; 
//         }
//       }
  
//       if (minIndex !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
//     return arr;
//   }
  
//   let arr = [5, 3, 8, 4, 2];
//   console.log("Sorted array:", selectionSort(arr));
  

// function selectionSort(arr){
//     for(let i = 0 ; i < arr.length - 1 ; i++){
//         let midIndex = i
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[j] < arr[midIndex]){
//                 midIndex = j
//             }
//         }

//         if(midIndex !== i){
//             let temp = arr[i]
//             arr[i] = arr[midIndex]
//             arr[midIndex] = temp 
//         }
//     }
//     return arr
// }

//   let arr = [5, 3, 8, 4, 2];
//   console.log("Sorted array:", selectionSort(arr));
  


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left , right){
//     let sortedArr =[]
// while(left.length && right.length){
//     if(left[0] <= right[0]){
//         sortedArr.push(left.shift())
//     }else{
//         sortedArr.push(right.shift())
//     }
// }
// return [...sortedArr,...left,...right]
// }

// let arr= [3,5,6,7,-2,1,9]
// console.log(mergeSort(arr));





// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] > arr[j] ){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// let arr=[3,2,5,4,6,-3,1]

// console.log(bubbleSort(arr));



// function insertionSort(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         let insertion = arr[i]
//         let j = i-1
//         while(j >= 0 && arr[j] > insertion){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = insertion
//     }
//     return arr
// }

// let arr =[5,3,9,-3,2,1,7]
// console.log(insertionSort(arr));



// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length-1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left) , pivot , ...quickSort(right)]
// }

// let arr = [2,5,-2,1,3,9,4]
// console.log(quickSort(arr));



// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left , right){
// let sortedArr = []
//   while(left.length && right.length){
//     if(left[0] <= right[0]){
//         sortedArr.push(left.shift())
//     }else{
//         sortedArr.push(right.shift())
//     }
//   }
//   return [...sortedArr,...left,...right]
// }

// let arr= [4,7,-1,2,4,3]

// console.log(mergeSort(arr));


// function selectionSort(arr){
//     for(let i = 0 ; i < arr.length - 1 ; i++){
//         let minIndex = i
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex !== i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }

// let arr = [2,6,4,-1,5,8,7]
// console.log(selectionSort(arr));




