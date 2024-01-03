/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    nums.sort((a, b) => a - b)
    return nSum(nums, 4, target)
}

function nSum(nums, n, target, start = 0) {
    const size = nums.length
    const result = []
    if (size < n || size < 2) return result

    if (n === 2) {
        let left = start, right = size - 1
        while (left < right) {
            const sum = nums[left] + nums[right]
            let curLeft = nums[left], curRight = nums[right]
            if (sum < target) {
                while (left < right && nums[left] === curLeft) left++
            } else if (sum > target) {
                while (left < right && nums[right] === curRight) right--
            } else {
                result.push([nums[left], nums[right]])
                while (left < right && nums[left] === curLeft) left++
                while (left < right && nums[right] === curRight) right--
            }
        }
    } else {
        for (let i = start; i < size; i++) {
            const subs = nSum(nums, n - 1, target - nums[i], i + 1)
            for (let sub of subs) {
                sub.push(nums[i])
                result.push(sub)
            }
            while (i < size - 1 && nums[i] === nums[i + 1]) i++
        }
    }
    return result
}