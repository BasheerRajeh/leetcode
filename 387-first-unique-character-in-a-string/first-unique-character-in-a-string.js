/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = s.split('').reduce((acc, cur) => {
        acc[cur] = 1 + (acc[cur] || 0)
        return acc
    }, {})

    for(let i = 0; i < s.length; i++) {
        if(count[s[i]] === 1) return i
    }
    
    return -1
};