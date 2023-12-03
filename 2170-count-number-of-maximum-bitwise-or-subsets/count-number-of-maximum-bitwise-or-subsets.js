/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    const maxBetwiseOr = nums.reduce((acc, cur) => acc | cur, 0)

    let counter = 0
    const backtrack = (start, subset) => {
        if(subset){
            const subOr = subset.reduce((a,b) => a | b, 0)
            if(subOr === maxBetwiseOr) 
                counter++
        }
        
        for (let i = start; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(i + 1, subset);
            subset.pop();
        }
    }
    backtrack(0, [])
    return counter
};