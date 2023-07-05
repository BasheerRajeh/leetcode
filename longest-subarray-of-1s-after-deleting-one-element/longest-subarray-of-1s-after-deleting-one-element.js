/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, maxWin = 0, zeroIndex = -1;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === 0){
            left = zeroIndex + 1;
            zeroIndex = i;
        }

        maxWin = Math.max(maxWin, i - left);
    }

    return maxWin;
};