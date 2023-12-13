/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums.length) return -1

    const binarySearch = (s, e) => {
        if (s > e) return -1

        const m = s + Math.floor((e - s) / 2)

        if(nums[m] === target) return m

        if (nums[m] > target)
            return binarySearch(s, m - 1)
        else
            return binarySearch(m + 1, e)
    }

    return binarySearch(0, nums.length - 1)
};