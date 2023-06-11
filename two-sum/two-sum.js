/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let cache = {};
    
    for(let index = 0; index< nums.length; index++){
        const element = nums[index];
        if(cache[target-element]!==undefined){
            return [index, cache[target-element]];
        }else{
            cache[element] = index;
        }
    }

};