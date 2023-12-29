/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {}
    const freq = []

    const res = []

    for(let n of nums) 
        count[n] = 1 + (count[n] || 0)
    
    for(let c in count){
        if(freq[count[c]])
            freq[count[c]].push(c)
        else
            freq[count[c]] = [c]
    }

    for(let i = freq.length - 1; i >= 0; i--){
        if(freq[i]){
            for(let n of freq[i]) {
                res.push(n)
                if(res.length === k) return res
            }
        }
    }

    return res
};