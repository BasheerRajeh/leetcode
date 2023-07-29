/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if(n >= 5000) return 1;

    const helper = (a, b, memo = {})=>{
        if(a <= 0 && b <= 0) return 0.5;
        if(a <= 0) return 1;
        if(b <= 0) return 0;

        const key = `a-${a} b-${b}`;
        if(memo[key]) return memo[key];

        const r = 0.25 * (
            helper(a - 100, b, memo) + 
            helper(a - 75, b - 25, memo) + 
            helper(a - 50, b - 50, memo) +
            helper(a - 25, b - 75, memo)
        );

        memo[key] = r;
        return r;
    };

    return helper(n , n);
};