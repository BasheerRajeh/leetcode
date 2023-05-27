/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let s = 0,
        e = nums.length - 1;
    let mid;
    while (s <= e) {
        mid = parseInt((s + e) / 2);
        if (target > nums[mid]) s = mid + 1;
        else if (target < nums[mid]) e = mid - 1;
        else return mid;
    }

    return s;
};