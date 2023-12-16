/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  return nSumTarget(nums, 3, 0, 0);
}

var nSumTarget = function(nums, n, start, target) {
  const sz = nums.length;
  const res = [];

  if (n < 2 || sz < n) return res;
  
  if (n == 2) {
    let lo = start, hi = sz - 1;
    while (lo < hi) {
      const sum = nums[lo] + nums[hi];
      const left = nums[lo], right = nums[hi];
      if (sum < target) {
        while (lo < hi && nums[lo] == left) lo++;
      } else if (sum > target) {
        while (lo < hi && nums[hi] == right) hi--;
      } else {
        res.push([left, right]);
        while (lo < hi && nums[lo] == left) lo++;
        while (lo < hi && nums[hi] == right) hi--;
      }
    }
  } else {
    for (let i = start; i < sz; i++) {
      const sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      for (let j = 0; j < sub.length; j++) {
        sub[j].push(nums[i]);
        res.push(sub[j]);
      }
      while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
    }
  }
  return res;
};