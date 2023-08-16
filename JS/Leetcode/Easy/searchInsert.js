//https://leetcode.com/problems/search-insert-position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i=0, len = nums.length, targetIndex = len
    while(i<len){
        if(nums[i] >= target){
            targetIndex = i
            break
        }
        i++
    }
    return targetIndex
    
};