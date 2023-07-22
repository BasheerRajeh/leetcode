/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, r, c) {
    const moves = [[1,2], [2,1], [-1,2], [2,-1], [-1,-2], [-2,-1], [1,-2], [-2,1]];
    let dp = Array.from({length: n}, () => Array(n).fill(0));
    let dpPrev = Array.from({length: n}, () => Array(n).fill(0));
    dpPrev[r][c] = 1;

    for(let step = 0; step < k; step++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                dp[i][j] = 0;
                for(let [dr, dc] of moves) {
                    let prevR = i - dr;
                    let prevC = j - dc;
                    if(prevR >= 0 && prevR < n && prevC >= 0 && prevC < n) {
                        dp[i][j] += dpPrev[prevR][prevC] / 8.0;
                    }
                }
            }
        }
        [dp, dpPrev] = [dpPrev, dp];
    }

    let totalProbability = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            totalProbability += dpPrev[i][j];
        }
    }

    return totalProbability;
};