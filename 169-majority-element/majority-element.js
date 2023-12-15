/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})

    const max = {
        el: 0,
        count: 0
    }

    for(let el in count) {
        if(count[el] > max.count) {
            max.el = el
            max.count = count[el]
        }
    }

    return max.el
};