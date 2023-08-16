/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums.length || k === 0) {
        return [];
    }
    if (k === 1) {
        return nums;
    }

    let deq = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        while (deq.length && deq[0] < i - k + 1) {
            deq.shift();
        }
        while (deq.length && nums[i] > nums[deq[deq.length - 1]]) {
            deq.pop();
        }

        deq.push(i);
        if (i >= k - 1) {
            result.push(nums[deq[0]]);
        }
    }
    
    return result;
};
