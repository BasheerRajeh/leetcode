/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    const indegree = Array(n).fill(0);
    let answer = 0;

    function helper(i, count){
      if(i === requests.length){
        for(let i = 0; i < n; i++){
          if(indegree[i]!==0){
            return;
          }
        }

        answer = Math.max(answer, count);
        return;
      }

      indegree[requests[i][0]]--;
      indegree[requests[i][1]]++;
      helper(i+1, count+1);
      indegree[requests[i][0]]++;
      indegree[requests[i][1]]--;

      helper(i+1,count);
    }
    helper(0,0)
    return answer;
};