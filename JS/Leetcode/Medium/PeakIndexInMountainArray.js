// https://leetcode.com/problems/peak-index-in-a-mountain-array/
// O(N)
var peakIndexInMountainArray1 = function(arr) {
    let max=arr[0], maxIndex = 0
    arr.forEach((a,i)=>{
        if(a>max){
            max = a
            maxIndex = i
        }
    })
    return maxIndex
}

// O(LogN)
var peakIndexInMountainArray2 = function(arr) {
    let left = 1;
    let right = arr.length - 2;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};