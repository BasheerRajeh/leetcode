/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if(n <= 1) return 1
    if(memo[n]) return memo[n]
    memo[n - 1] = climbStairs(n - 1, memo) 
    memo[n - 2] = climbStairs(n - 2, memo) 
    return memo[n - 1] + memo[n - 2]   
};