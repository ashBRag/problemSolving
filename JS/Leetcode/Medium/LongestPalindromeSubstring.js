// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */

// O(n)^3 , brute force
export const longestPalindrome1 = function(s) {
    const len = s.length

    if(len<=1){
        return s
    }

    let palindrome = [], strArr = s.split(''), maxLen = 0, p=[]

    const isPalindrome = (str) => {
        let len = str.length
        let half = Math.floor(len/2)
        return !str.slice(0, half).some((s,i)=>s!=str[len-i-1])
    }

    for(let i1=0;i1<len;i1++){
        for(let i = 0 ; i<=len-i1; i++){
            palindrome = strArr.slice(i1,i1+i+1)
            if(isPalindrome(palindrome)){
                let len = palindrome.length
                if(maxLen<=len){
                    p = [...palindrome]
                    maxLen = len
                }
            }
        }
    }

    return p.join('')
};

// O(n)^2 , expand around center approach
// https://www.geeksforgeeks.org/longest-palindromic-substring-using-dynamic-programming-2/
export var longestPalindrome2 = function(s) {
    const len = s.length

    if(len<=1){
        return s
    }
    let maxLen = 1, palindrome = ''

    const expandAroundCenter = (l, r, str) =>{
        while (l>=0 && r <= str.length && str[l] === str[r]){
            l--
            r++
        }
        if(r-l-1>=maxLen){
            maxLen = r-l-1
            palindrome = str.substring(l+1, r)
        }
    }

    for(i=0;i<len;i++){
        expandAroundCenter(i,i,s) // odd
        expandAroundCenter(i,i+1,s) // even
    }

    return palindrome

};