const countWords = inputWords => {
  return inputWords.reduce((obj, curr) => {
    obj[curr] = ++obj[curr] || 1;
    return obj;
  }, {});
};
module.exports = countWords;
