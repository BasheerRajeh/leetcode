/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return 0

    nums.sort((a, b) => a - b)
    let diff = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < nums.length - 2; i++) {
        let sum = nums[i] + twoSumClosest(nums, i + 1, target - nums[i])
        if(Math.abs(target - sum) < Math.abs(diff)) {
            diff = target - sum
        }
    }
    return target - diff
}

function twoSumClosest(nums, start, target) {
    let left = start, right = nums.length - 1
    let diff = Number.MAX_SAFE_INTEGER
    while(left < right) {
        let sum = nums[left] + nums[right]
        if(Math.abs(target - sum) < Math.abs(diff)) {
            diff = target - sum
        }
        if(sum > target) right--
        else left++
    }
    return target - diff
}