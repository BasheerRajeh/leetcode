/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
    const dfs = (i, prev) => {
        if(i === s.length)
            return true
        
        for(let j = i; j < s.length; j++) {
            const val = Number(s.slice(i, j + 1))
            if(val + 1 === prev && dfs(j + 1, val)) {
                return true
            }
        }
        return false
    }

    for(let i = 0; i < s.length - 1; i++) {
        const val = Number(s.slice(0, i + 1))
        if(dfs(i + 1, val)) 
            return true
    }
    return false
};

