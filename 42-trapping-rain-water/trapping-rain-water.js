/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length == 0) {
    return 0;
  }
  var n = height.length;
  var res = 0;
  var l_max = new Array(n);
  var r_max = new Array(n);
  l_max[0] = height[0];
  r_max[n - 1] = height[n - 1];
  for (var i = 1; i < n; i++) {
    l_max[i] = Math.max(height[i], l_max[i - 1]);
  }
  for (var i = n - 2; i >= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i + 1]);
  }
  for (var i = 1; i < n - 1; i++) {
    res += Math.min(l_max[i], r_max[i]) - height[i];
  }


  return res;
};
