/*
QUESTION 2
Given two strings, write a method to decide if one is a permutation of the other

(permutation is of a string that contains the same character as the other)
*/

// case where they are not the same length

// sort them nlogn, 
// then loop through the string to see if one has something the other doesnt O(n)

// what if one has capital letters and the other doesn't?

function permutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  let s1 = str1.toLowerCase().split('').sort().join('');
  let s2 = str2.toLowerCase().split('').sort().join('');

  return (s1 === s2);
}

// let str1 = 'abce'
// let str2 = 'ecba'


// let str3 = 'Abce'
// let str4 = 'ecba'

// console.log(permutation(str1, str2))

