/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = Array(n + 1).fill(0)
    
    const dp = (n) => {
        if(n === 0 || n === 1) return n
        if(memo[n] !== 0) return memo[n]

        memo[n] = dp(n - 1) + dp(n - 2)
        return memo[n]
    }

    return dp(n)
};