/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []
    const part = []

    const dfs = (i) => {
        if(i === s.length) {
            res.push([...part])
            return
        }
        for(let j = i; j < s.length; j++) {
            if(isPalindrom(s, i, j)) {
                part.push(s.slice(i, j + 1))
                dfs(j + 1)
                part.pop()
            }
        }
    }
    dfs(0)
    return res
};

function isPalindrom(arr, start, end) {
    while(start < end) {
        if(arr[start] !== arr[end])
            return false
        start++
        end--
    }
    return true
}