/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let temp = decimalToBinaryArray(Math.max(a,b,c));

    let aArr = decimalToBinaryArray(a, temp.length);
    let bArr = decimalToBinaryArray(b, temp.length);
    let cArr = decimalToBinaryArray(c, temp.length);

    let res = 0;

    for(let i = 0; i< temp.length; i++){
        if(!cArr[i] & (aArr[i] & bArr[i]))
            res+=2;
        else if(!cArr[i] & (aArr[i] | bArr[i]))
            res++;
        else if(cArr[i] & (!aArr[i] & !bArr[i]))
            res++;
    }

    return res;
};

var decimalToBinaryArray = function(number, maxLength = 0){
    const b = [];
    while(number>0){
        b.unshift(number%2);
        number = Math.floor(number/2);
        maxLength--;
    }
    while(maxLength-->0){
        b.unshift(0);
    }
    return b;
}