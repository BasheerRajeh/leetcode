/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = n => {
  const weekly = 28
  const weeks = Math.floor(n / 7)
  
  let res = weekly * weeks

  res += Math.floor((weeks * (weeks - 1) * 7) / 2)

  const tmp = n % 7

  return res + ((tmp * (tmp - 1)) / 2) + (weeks + 1) * tmp 


}