//https://leetcode.com/problems/string-to-integer-atoi

/**
 * @param {string} s
 * @return {number}
 */
const isSafeInteger = (int) => {
    let limit = Math.pow(2, 31)
    if(int < -limit){
        return -limit
    }
    if( int > (limit - 1)){
        return limit-1
    }
    return int
}
var myAtoi = function(s) {
    s = s.trim(), res = 0
    //return isSafeInteger(parseInt(s)||0)
    let sign = s[0] == '-' ? -1 : 1

    if(sign=== -1 || s[0]== '+'){
        s = s.slice(1)
    }

    s.split('').some(num=>{
        if(num>='0' && num<='9'){
            res = res*10 + (num-0)
        }
        else {
            return true
        }
    })

    return isSafeInteger(res * sign)
};