/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = []
    const prems = []
    const count = nums.reduce((acc, val)=>{
        acc[val]? acc[val] += 1: acc[val] = 1
        return acc
    }, {})

    const dfs = () =>{
        if(prems.length === nums.length){
            res.push(prems.slice())
            return
        }

        for(let n in count){
            if(count[n] > 0){
                prems.push(n)
                count[n] -= 1

                dfs()

                count[n] += 1
                prems.pop()
            }
        }
    }

    dfs()
    return res
    

};
