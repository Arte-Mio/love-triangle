/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var result = 0;

  preferences.forEach(function(c, index) {
      var pointer = index + 1;
      var b = preferences[c - 1];
      var a = preferences[b - 1];
      if (c != pointer && 
          b != a &&
          a == pointer)
          result++;
  })
  return result / 3;
};
