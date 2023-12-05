/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    res = []
   for(let i = 0; i < nums.length; i++)
       res.push(nums[i][i] === '0' ? '1' : '0')
   return res.join('')
};