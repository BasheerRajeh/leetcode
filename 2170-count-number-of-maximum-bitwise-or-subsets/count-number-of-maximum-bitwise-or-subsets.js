/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    const maxBetwiseOr = nums.reduce((acc, cur) => acc | cur, 0)

    let counter = 0
    const backtrack = (idx, curOr) => {
        if(idx === nums.length){
            if(curOr === maxBetwiseOr)
                counter++
            return
        }
        backtrack(idx + 1, curOr | nums[idx])
        backtrack(idx + 1, curOr)
    }
    backtrack(0, 0)
    return counter
};