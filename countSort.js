let arr = [1, 1, 1, 3, 4, 2, 2, 2, 1, 3, 4, 5, 1, 2, 4, 1];

let freqArr = new Array(Math.max(...arr)+1).fill(0);

for (let index = 0; index < arr.length; index++) {
    freqArr[arr[index]]++;
}

console.log(freqArr);

let prefixSum = new Array(freqArr.length).fill(0);

for (let index = 1; index < prefixSum.length; index++) {
    prefixSum[index]=prefixSum[index-1]+freqArr[index]
}

console.log(prefixSum);

let finalArr = new Array(arr.length).fill(0);

for (let index = finalArr.length-1; index >=0; index--) {
    let indexOfArr = prefixSum[arr[index]];
    prefixSum[arr[index]]--;
    finalArr[indexOfArr - 1]=arr[index];
    
}

console.log(finalArr);