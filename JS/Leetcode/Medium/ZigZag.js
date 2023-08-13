// https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function create2DArray(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(null));
}
//Brute force, O(N3)
export var convert1 = function(s, numRows) {
    const len = s.length
    if(len===1 || numRows ===1){
        return s
    }
    const numCol = Math.ceil(len/2)

    let  item = 0,
    matrix = create2DArray(numRows, numCol)
    const travelDown = (c) => {
        for(let i=0;i<numRows && item < len;i++,item++){
            matrix[i][c] = s[item]
        }
    }
    const travelDiagonal=(c)=>{
        for(let i= 1;i < numRows-1 && item < len;i++, item++, c++){
            matrix[numRows-i-1][c+1] = s[item]
        }
    }

    for (let i=0;item<len;i+=(numRows-1)){
        travelDown(i)
        travelDiagonal(i)
    }

    let str = ''
    for(i=0;i<numRows;i++){
        for(j=0;j<numCol;j++){
            if(matrix[i][j])
                str = str + matrix[i][j]
        }
    }

    return str
    
};

//somewhat optimized
export var convert2 = function(s, numRows) {
    const len = s.length
    if(len===1 || numRows ===1){
        return s
    }

    let  item = 0,
    str = Array(numRows).fill('')

    const travelDown = (c) => {
        for(let i=0;i<numRows && item < len;i++,item++){
            str[i] = str[i]+s[item]
        }
    }

    const travelDiagonal=(c)=>{
        for(let i= 1;i < numRows-1 && item < len;i++, item++, c++){
            str[numRows-i-1] = str[numRows-i-1] + s[item]
        }
    }
    for (let i=0;item<len;i+=(numRows-1)){
        travelDown(i)
        travelDiagonal(i)
    }
    return str.join("")
    
};

//optimised O(1)
export var convert3 = function(s, numRows) {
    const len = s.length
    if(len===1 || numRows ===1){
        return s
    }

    let str = Array(numRows).fill('')

    let down = true, row =0 
    for (let i=0;i<len;i++){
        str[row] += s[i]
        if (row == numRows - 1) {
            down = false;
        }
        if (row == 0) {
            down = true;
        }
        if (!down)
            row--;
        else
            row++;


    }
    return str.join("")
    
};

