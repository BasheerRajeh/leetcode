/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b)

    const res = []

    for(let i = 0; i < nums.length - 2; i += 3) {
        if(nums[i + 2] - nums[i] > k) 
            return [] 
        res.push(nums.slice(i, i + 3))
    }

    return res
};