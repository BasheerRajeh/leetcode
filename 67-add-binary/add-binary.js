/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  var sb = "";

  var m = a.length, n = b.length;
  var carry = 0;
  var i = 0;

  while (i < Math.max(m, n) || carry > 0) {
    var val = carry;
    val += i < m ? parseInt(a.charAt(i)) : 0;
    val += i < n ? parseInt(b.charAt(i)) : 0;
    sb += (val % 2);
    carry = Math.floor(val / 2);
    i++;
  }

  return sb.split("").reverse().join("");
};