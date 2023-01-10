module.exports = function toReadable (number) {
  let result = [];
  let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let third = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let arr = String(number).split('');
  for (let i = 0; i <= 9; i++) {
    // zero:
    if (arr.length == 1 && arr[0] == i) {
      result.push(first[i]);
    // ten - ninteen:
    } else if (arr.at(-2) == 1 && arr.at(-1) == i) {
      result.push(second[i]);
    // twenty - ninety:
    } else if (arr.at(-2) != 1 && arr.at(-2) != 0 && arr.at(-1) == 0 && arr.at(-2) == i) {
      result.push(third[i-2]);
    // 21 - 99:
    } else if (arr.at(-2) != 1 && arr.at(-2) != 0 && arr.at(-2) == i) {
      for (let j = 0; j <= 9; j++) {
        if (arr.at(-1) == j) {
          result.push(third[i-2], first[j]);
        }
      }
    // one - nine;
    } else if (arr.at(-2) == 0 && arr.at(-1) != 0 && arr.at(-1) == i) {
      result.push(first[i]);
    }
    // hundreds:
    if (arr.length == 3 && arr.at(-3) == i) {
      result.unshift(first[i], 'hundred');
    }
  }
  return result.join(' ');
}
