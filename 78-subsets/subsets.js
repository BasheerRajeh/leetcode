/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subs = []
    const dfs = (i, cur) => {
        if(i === nums.length) {
            subs.push([...cur])
            return
        }
        dfs(i + 1, [...cur, nums[i]])
        dfs(i + 1, cur)
    }  
    dfs(0, [])
    return subs
};