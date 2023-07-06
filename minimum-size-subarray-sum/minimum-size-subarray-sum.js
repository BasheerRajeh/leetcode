/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
   let left = 0, right = 0, sumWin = 0;
   let answer = Number.MAX_SAFE_INTEGER;

    for(right = 0; right < nums.length; right++){
        sumWin += nums[right]; 
        
        while(sumWin >= target){
            answer = Math.min(answer, right - left + 1);
            sumWin -= nums[left++];
        }
    }

    return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
};