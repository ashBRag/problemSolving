//https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1
    for(let i = digits.length-1; i>=0; i--){
        let sum = digits[i]+carry
        if(sum<10){
            digits[i] = sum
            carry = 0
            break
        }
        else{
            carry = Math.floor(sum/10)
            digits[i] = sum - 10
        }
    }
    if(carry){
        return [carry, ...digits]
    }
    return digits
    
};