/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let s = 0, e = letters.length - 1;
    let mid = 0;
    if(target >= letters[e] || target < letters[0]) return letters[0];

    while(s <= e){
        mid = Math.floor((s + e) / 2);
        if(letters[mid] > target) e = mid - 1;
        if(letters[mid] <= target) s = mid + 1;   
    }

    return letters[s];
};