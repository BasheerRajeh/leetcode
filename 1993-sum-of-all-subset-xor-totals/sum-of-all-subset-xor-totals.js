/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums, i = 0, res = 0) {
    if(i === nums.length)
        return res
    
    const withNum = subsetXORSum(nums, i + 1, res ^ nums[i])
    const withoutNum = subsetXORSum(nums, i + 1, res)

    return withNum + withoutNum
};