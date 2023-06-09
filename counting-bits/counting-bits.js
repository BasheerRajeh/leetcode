/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const cache = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        cache[i] = cache[Math.floor(i / 2)] + (i % 2);
    }
    
    return cache;
};
