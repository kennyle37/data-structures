/*
QUESTION 3

Write a method to replace all spaces in a string with '%20'. You are given the TRUE length of the string

input: "mr john smith  "
output: "mr%20john%20smith"
*/

/*
case 1 - word only have one space ie "mr smith"
case 2 - word have trailing space at the end ie "smith  "
case 3 - word have trailing more than once space in the middle "mr  smith"
case 4 - word begins with a space " smith"
case 5 - word is empty  ' '
*/

function urlify(str, len) {
  // if the len is 0 return ''
  
  // declare a regex with the double space
  // replace the double space
  // slice the string beginning at 0 and end at the len to get its true length

  // declare a regex with single space
  // replace the single space with %20

  if (len === 0) return '';

  const doubleSpace = /\s{2,}/g; //remove double spaces
  const urlify = /\s/g; //target space
  let trueSpace = str.replace(doubleSpace, ' ');
  let trueLength = trueSpace.slice(0, len);
  return trueLength.replace(urlify, '%20');
}

// console.log(urlify(case1, 8), 'ACTUAL: mr%20smith')
// console.log(urlify(case2, 5), 'ACTUAL: smith')
// console.log(urlify(case3, 8), 'ACTUAL: mr%20smith')
// console.log(urlify(case4, 6), 'ACTUAL: %20smith')
// console.log(urlify(case5, 0), '')
// console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
