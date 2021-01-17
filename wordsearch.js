const transpose = function(matrix) {
    let transposedMatrix = [];
    const transposedRows = matrix[0].length;
  
    for (let i = 0; i < transposedRows; i++) {
      let transposedRow = [];
      for (const row of matrix) {
        transposedRow.push(row[i]);
      }
      transposedMatrix.push(transposedRow);
    }
  
    return transposedMatrix;
  };

const wordSearch = (letters, word) => {
    if (letters.length < 1) {
        return false;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const h of horizontalJoin) {
        if (h.includes(word)) return true;
    }

    const transposedMatrix = transpose(letters);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''));
    for (const v of verticalJoin) {
        if (v.includes(word)) return true;
    }

    return false;
}

module.exports = wordSearch