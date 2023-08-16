//https://leetcode.com/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */
const isSafeInteger = (int)=> ((-1*Math.pow(2,31)) <= int) && ((Math.pow(2,31) - 1) >= int)
var reverse = function(x) {
    let n = 0
    let isNegative = x<0 ? -1 : 1
    x=Math.abs(x)
    while(x>0){
        let last = x%10;
        x = (x-last)/10
        n = n*10 + last
    }
    n = n* isNegative
    return isSafeInteger(n) ? n : 0
};