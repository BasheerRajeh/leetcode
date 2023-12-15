/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0, max = -Number.MAX_VALUE
    if (nums.length === 1) return nums[0];
    
    for(let c of nums){
        sum += c
        max = Math.max(max, sum)
        if(sum < 0) 
            sum = 0
    }

    return max
};