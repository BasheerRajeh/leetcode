/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowelsSorted = [...s].filter(c => 'aeiouAEIOU'.includes(c)).sort().reverse();

    let result = '';
    for (const char of s) {
        if ('aeiouAEIOU'.includes(char)) {
            result += vowelsSorted.pop();
        } else {
            result += char;
        }
    }

    return result;    
};