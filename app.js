let arr = [4,3,6,2,8,9,24,7]

function heapSort(arr){

    let n = arr.length

    for(let i = Math.floor(n - 1/2); i >=0 ; i--){
        heap(arr,n,i)
    }

    for(let i = n-1 ; i >=0 ; i--){
        [arr[0] , arr[i]] = [arr[i] , arr[0]]
        heap(arr,i,0)
    }
}

function heap(arr,n,i){
    let largest = i
    let left = (i * 2) + 1
    let right = (i * 2) + 2

    if(left < n && arr[left] > arr[largest] ){
        largest = left
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !==i){
    [arr[largest] , arr[i]] = [arr[i], arr[largest]]
    heap(arr,n,largest)
    }
    
}

heapSort(arr)
console.log(arr);
