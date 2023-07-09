/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    const sArr = s.split('');
    const freq = {};
    let ans = 0;
    for(let c of sArr){
        freq[c] = (freq[0] || 0) + 1;
    }
    for(let k1 in freq){
        for(let k2 in freq){
            for (let i = 0; i<2; i++) {
                let count1 = 0;
                let count2 = 0;
                for (let c of sArr) {
                    if (c === k1) {
                        count1++
                    }
                    if (c === k2) {
                        count2++
                    }
                    if (count1<count2) {
                        count1 = 0
                        count2 = 0
                    }
                    if (count1 > 0 && count2 > 0) {
                        ans = Math.max(ans, count1-count2)
                    }
                }
                sArr.reverse()
            }
        }
    }
    return ans;
};