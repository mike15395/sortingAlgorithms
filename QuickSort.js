function partition(arr,start,end) {
    let pivot = arr[end]; //taking pivot as the last element of array
    let smaller = start;
    for (let i = start; i < end; i++){
        if (arr[i] < pivot) {
            swap(arr,i, smaller);
            smaller++;
        }
    }
    swap(arr,end,smaller);
    
    
    return smaller;
}

function swap(arr,a,b){
    let temp=arr[b];
    arr[b]= arr[a];
    arr[a] = temp;
}

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let p = partition(arr, start, end);
    quickSort(arr, start, p - 1)
    quickSort(arr, p + 1, end);
}
let arr = [7,-2,4,1,6,5,0,-4,2]
quickSort(arr, 0, arr.length - 1);
console.log(arr);
