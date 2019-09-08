/*
QUESTION 4

Given a string, write a function to check if it is a permutation of a palindrome. Palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited ot just dictionary words.

to find whether something is a palindrome or not is O(n)
*/

/*
  case where some letters are capitalized -- Tact Coa
  cases where there are spaces in the word -- Tact Coa

  loop through the function and store the occurances in a hash
  loop through the hash and if there is more than one odd char it's false
*/

function palindrome(str) {
  let hash = {};
  let count = 0;

  let lowercase = str.toLowerCase();
  let regex = /\s/g;

  let noSpace = lowercase.replace(regex, '');

  for (let value of noSpace) {
    hash[value] = (hash[value] || 0) + 1;
  }

  for (let key in hash) {
    if (hash[key] % 2 !== 0) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return hash;
}