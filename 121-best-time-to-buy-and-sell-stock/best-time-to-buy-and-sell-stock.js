/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], maxprof = 0
    for(let p of prices) {
        maxprof = Math.max(maxprof, p - min)
        min = Math.min(min, p)
    }

    return maxprof
};