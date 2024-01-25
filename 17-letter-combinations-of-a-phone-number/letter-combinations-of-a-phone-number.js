/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const combinations = []
    const cur = []
    const dfs = (i) => {
        if(i === digits.length) {
            combinations.push(cur.join(''))
            return
        }
        
        for(let letter of letters[digits[i]]) {
            cur.push(letter)
            dfs(i + 1)
            cur.pop()
        }
    }
    dfs(0)
    return combinations

};