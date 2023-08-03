/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    const digitToChar = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'qprs',
        8: 'tuv',
        9: 'wxyz'
    };

    const backtrack = (curDigit, curStr) => {
        if(curStr.length === digits.length){
            result.push(curStr);
            return;
        }
        
        for(let ch of digitToChar[digits[curDigit]].split('')) 
            backtrack(curDigit + 1, curStr + ch);
        
    }

    if(digits)
        backtrack(0, "");
    
    return result;


};