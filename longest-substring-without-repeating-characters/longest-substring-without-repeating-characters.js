/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    
    const seen = new Set();
    let longest = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        
        while (seen.has(currentChar)) {
            seen.delete(s[start]);
            start++;
        }
        
        seen.add(currentChar);
        longest = Math.max(longest, i - start + 1);
    }
    
    return longest;
};
