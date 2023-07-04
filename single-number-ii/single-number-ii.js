/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set(nums);
    
    const sum = nums.reduce((a, b) => a + b, 0);
    const sumSet = [...set].reduce((a, b) => a + b, 0);

    return (3 * sumSet - sum) / 2
};