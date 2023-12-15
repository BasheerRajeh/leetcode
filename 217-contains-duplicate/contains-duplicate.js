/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort()
    let prev
    for(let num of nums){
        if(num === prev) 
            return true
        prev = num
    }
    return false
};