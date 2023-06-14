/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0], maxPrice = prices[0];
    let maxDiff = maxPrice - minPrice;
    
    for(let i = 0; i < prices.length; i++){
        if(minPrice > prices[i]){
            minPrice = prices[i];
            maxPrice = prices[i];
        }
        if(maxPrice < prices[i]){
            maxPrice = prices[i];
        }
        if(maxPrice - minPrice > maxDiff)
            maxDiff = maxPrice - minPrice;
    }

    return maxDiff;
};