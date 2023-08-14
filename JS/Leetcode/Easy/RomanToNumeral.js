// https://leetcode.com/problems/roman-to-integer
/**
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function(s) {

    let valueObj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let numeral = 0

    s.split('').forEach((literal, i, arr)=>{
        let literalValue = valueObj[literal],
        nextLiteralValue = valueObj[arr[i+1]] || 0
        if(literalValue < nextLiteralValue){
            numeral -= literalValue
        }
        else {
            numeral +=literalValue
        }
    })
    return numeral
};