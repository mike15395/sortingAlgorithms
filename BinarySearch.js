function binarySearch(arr,key) {
    arr.sort((a, b) => (a - b));
   
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (key === arr[mid])
            return mid;
        else if (key > arr[mid])
            start = mid + 1;//move right
        else
            end = mid - 1;//move left
    }

}

console.log(binarySearch([19,22,10,11,3,12,7,5], 3));