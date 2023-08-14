//https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
export var longestCommonPrefix = function(strs) {

    let prefix = ''

    strs[0].split('').some((char,i)=>{
        let isPrefix = !strs.some((str)=>char!==str[i])
        if(isPrefix){
            prefix +=char
        }
        else{
            return true
        }
    })
     
    return prefix
    
};