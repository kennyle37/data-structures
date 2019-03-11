/*
QUESTION 1
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structure.
*/


// '' string
// string of all unique
// special characters?

// worse case is we have to loop through the entire string so that's o(n)

// if there are no data structure allowed, then it would be o(n^2). We would loop and check for each string to see if there is a duplicate of that string


// iterate through the entire string and store them
//   if we have visited the string before return


function isUnique(str) {
  let hash = {};

  for (let value of str) {
    if (hash[value]) {
      return false;
    }
    hash[value] = true;
  }

  return true;
}

function isUniqueNoHash(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      let current = str[i];
      let pointer = str[j];

      if (current === pointer) {
        return false;
      }
    }
  }
  return true;
}

// let case1 = 'abcdefghijklmnopqrstuvwxyz';
// let case2 = '';
// let case3 = 'bke;issit;';

// // console.log(isUnique(case1), true);
// // console.log(isUnique(case2), false);
// // console.log(isUnique(case3), false);

// console.log(isUniqueNoHash(case1), true);
// console.log(isUniqueNoHash(case2), false);
// console.log(isUniqueNoHash(case3), false);


