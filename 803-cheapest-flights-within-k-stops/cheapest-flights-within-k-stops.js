/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    K++;
    const memo = Array.from({ length: n }, () => Array(K + 1).fill(-888));
    const [source, target] = [src, dst];

    const indegree = new Map();
    for (const [from, to, price] of flights) {
        indegree.set(to, (indegree.get(to) || []).concat([[from, price]]));
    }

    function dp(s, k) {
        if (s === source) {
            return 0;
        }
        if (k === 0) {
            return -1;
        }
        if (memo[s][k] !== -888) {
            return memo[s][k];
        }

        let res = Infinity;
        if (indegree.has(s)) {
            for (const [from, price] of indegree.get(s)) {
                const subProblem = dp(from, k - 1);



                if (subProblem !== -1) {
                    res = Math.min(res, subProblem + price);
                }
            }
        }
        memo[s][k] = res === Infinity ? -1 : res;
        return memo[s][k];
    }

    return dp(target, K);
};
