/**
 * You can find question here: https://leetcode.com/problems/palindrome-number/
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  return x.toString().split("").reverse().join("") === x.toString();
};
