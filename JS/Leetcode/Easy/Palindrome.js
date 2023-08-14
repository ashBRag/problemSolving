//https://leetcode.com/problems/palindrome-number/submissions/
/**
 * @param {number} x
 * @return {boolean}
 */
export var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    if(x<10){
        return true
    }
    if(x<100){
        return !(x%11)
    }
    let arr = x.toString().split(''), len = arr.length

    return !arr.slice(0,Math.floor(len/2)).some((num,i)=>num!=arr[len-i-1])
    
};