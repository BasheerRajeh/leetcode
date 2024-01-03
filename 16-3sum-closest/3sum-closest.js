/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }
    nums.sort((a, b) =>  a - b)
    let delta = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 2; i++) {
        let sum = nums[i] + twoSumClosest(nums, i + 1, target - nums[i]);
        if (Math.abs(delta) > Math.abs(target - sum)) {
            delta = target - sum;
        }
    }
    return target - delta;
};

var twoSumClosest = function(nums, start, target) {
    let left = start, right = nums.length - 1;
    let delta = Number.MAX_SAFE_INTEGER;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (Math.abs(delta) > Math.abs(target - sum)) {
            delta = target - sum;
        }
        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return target - delta;
};