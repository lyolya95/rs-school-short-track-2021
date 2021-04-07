/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix) return;
  let sum = 0;
  const value = matrix.map((item) => parseInt(item.join(''), 0)).map((item) => item.toString()).join('').split('0')[0];

  for (let i = 0; i < value.length; i++) {
    sum += +value[i];
  }

  // eslint-disable-next-line consistent-return
  return sum;
}

module.exports = getMatrixElementsSum;
