/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    let zeroCount = k;
    let distribute = Array(k).fill(0)
 
    function dfs(i){
        if(cookies.length - i < zeroCount){
            return Number.MAX_SAFE_INTEGER;
        }

        if(cookies.length === i){
            let unfairness = Number.MIN_SAFE_INTEGER;
            for(let v of distribute){
                unfairness = Math.max(unfairness, v);
            }

            return unfairness;
        }

        let ans = Number.MAX_SAFE_INTEGER;
        for(let j = 0; j < k; j++){
            zeroCount -= distribute[j] === 0 ? 1 : 0;
            distribute[j] += cookies[i];
            ans = Math.min(ans, dfs(i+1))
            distribute[j] -= cookies[i];
            zeroCount += distribute[j] === 0 ? 1 : 0;
        }
        return ans;
    }

    return dfs(0);

};

