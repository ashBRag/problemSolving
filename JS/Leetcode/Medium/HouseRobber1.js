// Problem On : https://leetcode.com/problems/house-robber/


/**
 * @param {number[]} nums
 * @return {number}
 */


//recurrsion
var rob1 = function(nums) {
    function maxNotAdj(arr,i){
        if(i===0)
            return arr[i]
        if(i<0)
            return 0
        let pick = arr[i] + maxNotAdj(arr, i-2),
        notPick = 0 + maxNotAdj(arr, i-1)
        //console.log(i, pick, notPick)
        return Math.max(pick||0, notPick||0)
    }
    return maxNotAdj(nums, nums.length)
};


// DP with memoization
var rob2 = function(nums) {
    let len = nums.length
    let dp = Array(len).fill(-1)
    function maxNotAdj(arr,i, dp){
        if(dp[i] && dp[i]!=-1)
            return dp[i]
        if(i==0)
            return arr[i]
        if(i<0)
            return 0
        
        let pick = arr[i] + maxNotAdj(arr, i-2, dp)
        let notPick = 0 + maxNotAdj(arr, i-1, dp)
        dp[i] = Math.max(pick||0, notPick||0)
        return dp[i]
    }
    return maxNotAdj(nums, len - 1,dp)
    
};

// DP with tabularization

var rob3 = function(nums) {
    let len = nums.length
    let dp = Array(len+1).fill(-1)
    dp[0] = nums[0]
    for(let i=1;i<len;i++){
        let pick = nums[i] + (dp[i-2]||0)
        let notPick = 0 + dp[i-1]
        dp[i] = Math.max(pick||0, notPick||0)
    }
    return dp[len-1]
    
};

// DP with tabularization and space optimization

var rob4 = function(nums) { 
    let len = nums.length
    if(len===1){
        return nums[0]
    }
    let curr, prev = nums[0], prev1=0
    for(let i=1;i<len;i++){
        let pick = nums[i] + (prev1||0)
        let notPick = 0 + prev
        curr = Math.max(pick||0, notPick||0)
        prev1 = prev
        prev = curr
    }
    return curr
    
};