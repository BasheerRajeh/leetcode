/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(let p of s) {
        if(p === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
            continue
        } 
        if(p === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
            continue
        } 
        if(p === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
            continue
        }
        stack.push(p)
    }
    if(stack.length) return false
    return true
};