/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0; // Edge case: empty needle, always present at the beginning
    }

    for(let i = 0; i<= haystack.length - needle.length; i++ ){
        if(needle===haystack.slice(i, i+needle.length)){
            return i;
        }
    }
    return -1;
};