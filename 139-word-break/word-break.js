/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = Array(n + 1).fill(false);
    dp[n] = true;

    for(let i = n - 1; i >= 0; i--){
        for(let w of wordDict){
            if((i + w.length ) <= n && s.slice(i, i + w.length) === w){
                dp[i] = dp[i + w.length];
            }
            if(dp[i])
                break;
        }
    }
    return dp[0]
};