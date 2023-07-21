/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqs = {};
    for(let num of nums){
        freqs[num] = freqs[num] + 1 || 1; 
    }

    return Object.keys(freqs).sort((a, b) => freqs[b] - freqs[a]).slice(0, k);
};