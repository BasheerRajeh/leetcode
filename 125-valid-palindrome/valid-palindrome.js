/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const sb = []
    for(let c of s) 
        if(/[a-zA-Z0-9]/.test(c)) sb.push(c.toLowerCase())
    
    let st = 0, en = sb.length - 1
    while(st < en){
        if(sb[st] !== sb[en]) return false
        st++
        en--
    }
    return true
};