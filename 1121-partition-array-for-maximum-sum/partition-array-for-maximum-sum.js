/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length
    const dp = Array(n).fill(-1)

    const maxSum = (start) => {
        if(start >= n) {
            return 0
        }

        if(dp[start] !== -1){
            return dp[start]
        }

        let curMax = 0, ans = 0
        let end = Math.min(n, start + k)
        for(let i = start; i < end; i++) {
            curMax = Math.max(curMax, arr[i])
            ans = Math.max(ans, curMax * (i - start + 1) + maxSum(i + 1))
        }
        dp[start] = ans
        return ans
    }

    return maxSum(0)
};