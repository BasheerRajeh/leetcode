/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const dect = {}

    for(let c of magazine) {
        if(!dect[c])
            dect[c] = 1
        else
            dect[c] += 1
    }

    for(let c of ransomNote){
        if(dect[c] === undefined)
            return false
        dect[c] -= 1
        if(dect[c] < 0)
            return false
    }
    return true
};