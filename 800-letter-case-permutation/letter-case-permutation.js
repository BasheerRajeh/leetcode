/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = []
    const arr = []
    const dfs = (idx) => {
        if(idx === s.length) {
            res.push(arr.join(''))
            return
        }
        if(s[idx] >= '0' && s[idx] <='9'){
            arr[idx] = s[idx]
            dfs(idx + 1)
        }else{
            arr[idx] = s[idx].toUpperCase()
            dfs(idx + 1)
            arr[idx] = s[idx].toLowerCase()
            dfs(idx + 1)
        }
    }
    dfs(0)
    return res
};