/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 0, b = 1;
    while( n-- > 0 ){
        [a , b] = [b, a + b];
    }

    return a;
};