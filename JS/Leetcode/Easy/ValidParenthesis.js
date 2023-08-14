//https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
export var isValid = function(s) {
    let openBrackets = ["(", "{", "["]
    let closingBrackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let stack = []

    let valid = !s.split('').some((char)=>{
        if(openBrackets.includes(char)){
            stack.push(char)
        }
        else{
            let stackTop = closingBrackets[stack.pop()]
            return stackTop != char
        }
        return false

    })

    return valid && (stack.length===0)

    
};