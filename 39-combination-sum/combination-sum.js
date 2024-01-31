/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    const track = []

    backtrack(candidates, 0, target, 0, track)

    return res

    function backtrack(candidates, start, target, sum, track) {
        if(sum === target) {
            res.push([...track])
            return
        }

        if(sum > target) {
            return
        }

        for(let i = start; i < candidates.length; i++) {
            track.push(candidates[i])
            sum += candidates[i]
            backtrack(candidates, i, target, sum, track)
            sum -= candidates[i]
            track.pop()
        }
    }
};
