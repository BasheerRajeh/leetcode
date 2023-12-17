/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    
    let a, b
    const eval = (a, b, op) => {
        if(op === '*') return a * b
        if(op === '+') return a + b
        if(op === '-') return a - b
        if(op === '/') return parseInt(a / b)
        return null
    }

    for(let token of tokens) {
        if(/^-?\d*\.?\d+$/.test(token)) {
            stack.push(token)
        }else{
            b = stack.pop()
            a = stack.pop()
            stack.push(`${eval(parseInt(a), parseInt(b), token)}`)
        }
    }

    return stack.pop()
};