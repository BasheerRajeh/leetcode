/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Map();
    const window = new Map();

    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }

    let left = 0, right = 0;
    let valid = 0;

    let start = 0, len = Infinity;
    while (right < s.length) {

        let c = s[right];

        right++;

        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 1)
            if (window.get(c) === need.get(c))
                valid++;
        }

        
        while (valid === need.size) {
            
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            
            let d = s[left];
            
            left++;
            
            if (need.has(d)) {
                if (window.get(d) === need.get(d))
                    valid--;
                window.set(d, window.get(d) - 1)
            }
        }
    }
    
    return len === Infinity ?
            "" : s.substr(start, len);
};
