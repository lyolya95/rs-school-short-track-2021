/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr) return;

  const arrayPositive = arr.filter((item) => item > 0).sort((a, b) => a - b);

  const result = [];
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arrayPositive[idx++]);
    } else {
      result.push(arr[i]);
    }
  }

  // eslint-disable-next-line consistent-return
  return result;
}

module.exports = sortByHeight;
