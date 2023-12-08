/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const parenthesis = []
    const backtrack = (opened, closed, cur) => {
        if(closed === n) {
            parenthesis.push(cur)
            return
        }
        if(opened < n) {
            backtrack( opened + 1, closed, cur + '(')
        }
        if(closed < opened){
            backtrack( opened, closed + 1, cur + ')')
        }
    }
    backtrack(0, 0, '')
    return parenthesis
};