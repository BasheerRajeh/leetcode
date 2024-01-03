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
    if(size < n || size < 2) return result
    
    if(n === 2) {
        let left = start, right = size - 1
        let curLeft = nums[left], curRight = nums[right]
        while(left < right) {
            const sum = nums[left] + nums[right]
            if(sum < target) {
                while(left < right && nums[left] === curLeft) left++
            }else if(num > target) {
                while(left < right && nums[right] === curRight) right--
            }else{
                result.push([left, right])
                while(left < right && nums[left] === curLeft) left++
                while(left < right && nums[right] === curRight) right--
            }
        }
    }else {
        for(let i = start; i < size; i++) {
            const subs = nSum(nums, n - 1, target - nums[i], i + 1)
            for(let sub of subs) {
                sub.push(nums[i])
                result.push(sub)
            }
            while(i < size - 1 && nums[i] === nums[i + 1]) i++
        }
    }
    return result
}

var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  return nSumTarget(nums, 4, 0, target);
};

var nSumTarget = function(nums, n, start, target) {
  var sz = nums.length;
  var res = [];
  if (n < 2 || sz < n) return res;
  if (n === 2) {
    var lo = start, hi = sz - 1;
    while (lo < hi) {
      var sum = nums[lo] + nums[hi];
      var left = nums[lo], right = nums[hi];
      if (sum < target) {
        while (lo < hi && nums[lo] === left) lo++;
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi--;
      } else {
        res.push([left, right]);
        while (lo < hi && nums[lo] === left) lo++;
        while (lo < hi && nums[hi] === right) hi--;
      }
    }
  } else {
    for (var i = start; i < sz; i++) {
      var sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      for (var arr of sub) {
        arr.push(nums[i]);
        res.push(arr);
      }
      while (i < sz - 1 && nums[i] === nums[i + 1]) i++;
    }
  }
  return res;
};