// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length -1]
//     let left = []
//     let right = []

//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot , ...quickSort(right)]
// }


// let arr = [3,1,7,6,-1,2]
// console.log(quickSort(arr));


// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left) , pivot , ...quickSort(right)]
// }

// let arr = [2,5,7,9,1,-1]


// console.log(quickSort(arr));
