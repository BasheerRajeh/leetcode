/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let s1 = 0, s2 = 1;
  let stage = 0;
  while(stage++<n){
    [s1, s2] = [s2, s1 + s2];
  }
  return s2;
};