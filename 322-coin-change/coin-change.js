/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    dp = Array(amount + 1).fill(Number.MAX_VALUE)
    dp[0] = 0
    coins.sort()
    for(let a = 1; a <= amount + 1; a++){
        for(let c of coins) {
            if(a >= c) {
                dp[a] = Math.min(dp[a], 1 + dp[a - c])
            }
        }
    }

    return dp[amount] !== Number.MAX_VALUE? dp[amount] : -1 
};