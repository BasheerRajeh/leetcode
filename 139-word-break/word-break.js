/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
    const set = new Set(wordDict)

    function backtrack (cur, memo) {
        if(memo[cur] !== undefined) 
            return memo[cur]
        
        const len = cur.length
        if(len === 0) 
            return true

        for(let i = 1; i <= len; ++i) {
            if(set.has(cur.slice(0, i)) && backtrack(cur.slice(i), memo)){
                memo[cur] = true
                return true
            }
        }
        memo[cur] = false
        return false
    }

    return backtrack(s, {})
};