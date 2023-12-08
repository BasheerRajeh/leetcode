/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    const chrs = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }  

    const cominations = []

    const dfs = (i, cur) => {
        if(i === digits.length) {
            cominations.push(cur)
            return
        }
        for(let ch of chrs[digits[i]]){
            dfs(i + 1, cur + ch)
        }
    }
    dfs(0, '')
    return cominations;
};