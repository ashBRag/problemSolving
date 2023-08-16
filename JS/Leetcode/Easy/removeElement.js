//https://leetcode.com/problems/remove-element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0, j=0
    while(i<nums.length){
        if(nums[i] !== val){
           nums[j++] = nums[i]
        }
        i++
    }
    return j
    
};