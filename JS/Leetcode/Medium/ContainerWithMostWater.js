//https://leetcode.com/problems/container-with-most-water/description/


/**
 * @param {number[]} height
 * @return {number}
 */
//O(N^2)
var maxArea1 = function(height) {
    const len = height.length
    if(len===2)
    return Math.min(height[0], height[1])

    let max = 0

    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            let area = Math.min(height[i], height[j]) * Math.abs(i-j)
            //console.log(area, i, j)
            if(area > max){
                max = area
            }
        }
    }
    return max
    
};

// O(N)
var maxArea2 = function(height) {
    const len = height.length
    if(len===2)
    return Math.min(height[0], height[1])

    let max = 0, startPointer = 0, lastPointer = len-1

    for(let i=0;i<len;i++){
        let area = Math.min(height[startPointer], height[lastPointer]) * (lastPointer - startPointer)
        if(area> max){
            max = area
        }
        if(height[startPointer] < height[lastPointer]){
            startPointer +=1
        }
        else {
            lastPointer -=1
        }
        
    }
    return max
    
};