/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = {};
    for(let str of strs){
        const strKey = str.split("").sort().join("");
        groups[strKey] ? groups[strKey].push(str) : groups[strKey] = [str];
    }

    return Object.values(groups)
};