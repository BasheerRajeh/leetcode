/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let ans = 0;
  let keys = {};
  
  for (let c of s) {
    keys[c] = (keys[c] || 0) + 1;
    if (keys[c] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};