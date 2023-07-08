/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    const b = [];
    const n = weights.length;
    let res = 0;
    for(let i = 0; i< n - 1; i++){
        b.push(weights[i] + weights[i + 1]);
    }
    b.sort((a,b)=> a - b);
    for(let i = 0; i < k - 1; i++){
        res += b[b.length - 1 - i] - b[i];
    }
    return res;
};