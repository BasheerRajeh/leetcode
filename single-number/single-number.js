/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hash = {};
    for (let ch of nums) {
        if (hash[ch]) {
            delete hash[ch];
        } else {
            hash[ch] = true;
        }
    }

    return Object.keys(hash)[0];
};