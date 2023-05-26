/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let cur;
    for (let i = 0; i < nums.length - 1; i++) {
        cur = nums[i];
        let j = 0;
        while (cur === nums[i + j + 1]) {
            j++;
        }
        nums.splice(i, j);
    }
    return nums.length;
};