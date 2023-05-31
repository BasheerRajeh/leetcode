/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let s = 0, e = x;
  let m = 0;
  while(s <= e && s * s <= x){
      m = Math.floor((s + e) / 2);
      if( m*m > x){
          e = m - 1;
      }else if(m * m < x)
            s = m + 1;
        else return m;
  }  
  return m;
};