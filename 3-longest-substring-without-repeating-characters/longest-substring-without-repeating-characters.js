/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    const s = new Set()
    let longest = 0, left = 0, right = 0

    while(left < str.length) {
        if(right < str.length && !s.has(str[right])) {
            s.add(str[right])
            longest = Math.max(longest, s.size)
            right++
        }else if(s.has(str[right])){
            s.delete(str[left])
            left++
        }else{
            break
        }
    }

    return longest
};