/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const getIndex = letter => letter.charCodeAt(0) - 97;
    const buildArrStr = str => {
        const arr = [];
        str.split('').map(c => arr[getIndex(c)] = arr[getIndex(c)] + c || c );
        return arr.join('');
    };

    const group = {};
    for(let str of strs){
        const key = buildArrStr(str);
        if(group[key])
            group[key].push(str);
        else
            group[key] = [str];
    }

    return Object.values(group)
};