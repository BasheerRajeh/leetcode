/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let target = 0
    let count = 0
    for (let num of nums) {
        if (count === 0) {
            target = num
            count = 1
        } else if (num === target) {
            count++
        } else {
            count--
        }
    }

    return target
};