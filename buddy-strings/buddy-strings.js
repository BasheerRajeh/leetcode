/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false;

    let diffCount = 0;
    let diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffCount++;
            if (diffCount > 2) {
                return false;
            }
            diff.push(i);
        }
    }

    if (diffCount === 0) {
        return new Set(s).size !== s.length;
    }

    return (
        diffCount === 2 &&
        s[diff[0]] === goal[diff[1]] &&
        s[diff[1]] === goal[diff[0]]
    );
};
