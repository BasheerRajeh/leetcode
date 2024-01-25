/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subs = []
    const cur = []
    
    const dfs = (i) => {
        if(i === nums.length) {
            subs.push([...cur])
            return
        }
        cur.push(nums[i])
        dfs(i + 1)

        cur.pop()
        dfs(i + 1)
    }  
    dfs(0)
    return subs
};