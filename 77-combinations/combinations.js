/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const combinations = [];
    const backtrack = (comArr = [], currentNo = 1)=>{
        if(comArr.length === k ){
            combinations.push(Array.from(comArr));
        }
        if(comArr.length < k){
            for(let i = currentNo; i <= n; i++ ){
                comArr.push(i);
                backtrack(comArr, i + 1);
                comArr.pop();
            }
        }
    }
    backtrack();
    return combinations;        
}