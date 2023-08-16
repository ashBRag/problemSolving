// https://leetcode.com/problems/integer-to-roman
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romanLiterals = {
        1: 'I',
        5 : 'V',
        10 : 'X',
        50 : 'L',
        100 : 'C',
        500 : 'D',
        1000 : 'M'
    }
    let res2 = '', counter = 0
    function getLength(number) {
        return number.toString().length;
    }
    const findClosest= num =>{
        let res = ''
        if(romanLiterals[num])
            return romanLiterals[num]
        if(num%1000===0){
            let n = num
            while(n){
                res +='M'
                n-=1000
            }
            return res
        }
       
        Object.keys(romanLiterals).some((arrNum,i,arr)=>{
            if(num<arrNum){
                let p1 = arr[i-1]
                let distCurr = arrNum - num

                let dist1 = Math.pow(10,getLength(distCurr)-1)
                if(i%2){
                    if(distCurr===dist1){
                        res = romanLiterals[p1]+romanLiterals[arrNum]
                    }
                    else{
                        let n = num
                        while(n>0){
                            res= res + romanLiterals[p1]
                            n = n - dist1
                        }
                    }
                }
                else{
                    let p2 = arr[i-2]||0
                    if(distCurr==dist1){
                        res = romanLiterals[p2]+romanLiterals[arrNum]
                    }
                    else{
                        res = romanLiterals[p1]
                        let n = num - p1
                        while(n>0){
                            res= res + romanLiterals[p2]
                            n = n - dist1
                        }
                    }
                }
                return true
            }
        })
        return res||''
    }
    while(num>0){
        let last = num%10
        if(last){
            res2=  findClosest(last * Math.pow(10, counter)) + res2
        }
        num = Math.floor((num-last)/10)
        counter++
    }
    return res2
    
};