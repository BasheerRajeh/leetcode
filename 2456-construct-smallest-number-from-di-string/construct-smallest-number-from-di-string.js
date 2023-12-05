/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const res = []
    let stack = []
    for(let i = 0; i <= pattern.length; i ++){
        stack.push(`${1 + i}`)
        if(i === pattern.length || pattern[i] === 'I'){
            res.push(stack.reverse().join(''))
            stack = []
        }
    }
    return res.join('')
};