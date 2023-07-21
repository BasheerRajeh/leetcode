/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const objS = {}, objT = {}
    for(let i = 0; i< s.length; i++){
        objS[s[i]] = objS[s[i]] + 1 || 1
        objT[t[i]] = objT[t[i]] + 1 || 1
    }

    for(let letter in objS){
        if(objS[letter] !== objT[letter])
            return false;
    }

    return true;
};