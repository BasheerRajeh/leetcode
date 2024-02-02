/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const res = []
    const queue = Array(9).fill(0).map((cur, idx) => cur + idx + 1)

    while(queue.length) {
        const elem = queue.shift(1)
        if(low <= elem && elem <= high) {
            res.push(elem)
        }
        const last = elem % 10
        if(last < 9)
            queue.push(elem * 10 + last + 1)
    }
    return res
};