/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (!n) return;

  const array = n.toString().split('').map((item) => +item);
  let valueMin = [...array].sort((a, b) => a - b)[0];
  // eslint-disable-next-line consistent-return
  return +array.map((item) => {
    if (item === valueMin) {
      valueMin = '';
      return;
    }
    // eslint-disable-next-line consistent-return
    return item;
  }).filter((item) => item !== undefined).join('');
}

module.exports = deleteDigit;
