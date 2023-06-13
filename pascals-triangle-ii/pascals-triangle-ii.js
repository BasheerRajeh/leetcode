/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
  
    let row = [1, 1];
  
    for (let i = 2; i <= rowIndex; i++) {
        const newRow = [1];
      
        for (let j = 1; j < i; j++) {
            newRow[j] = row[j] + row[j - 1];
        }
      
        newRow.push(1);
        row = newRow;
    }
  
    return row;
};
