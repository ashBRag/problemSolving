// https://leetcode.com/problems/remove-duplicates-from-sorted-arra
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let i = 0,j=0

    while (i < nums.length) {
        const val = nums[i];
        if (nums.indexOf(val)===i) {
            nums[j++] = val
        };
        i++;
    }
    return j;    
};