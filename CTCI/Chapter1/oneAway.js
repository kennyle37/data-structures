/*
QUESTION 5

Three types of operation on a string: insert, remove, replace. Given two strings, write a function to check if they are one edits away

pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

*/

/*
  Conditions:
    Insert Case - ple -> p'a'le
    Remove Case - pale -> ple
    Replace Case - pale -> bale

    Auto Exit Case: When one str is 2 longer than the other one
    We can change/remove/add one element

  same case - increment both i and j cause they match

  remove case - when an element gets removed, we know that the next element in i will equal the current element in j
    decrement the number of times we have to change
      check to see if we have changed more than once if we are break out of the loop
    we want to move i up to make it match

  add case - when an element gets added, we know that the next element in j will equal the current element in i
    decrement the number of times we have to change
      check to see if we have changed more than once if we are break out of the loop
    increment up j to make it match
  
  replace case - when an element gets replaced, we know that because i and j next element equals each other
    decrement the number of times we have to change
      check to see if we have changed more than once if we are break out of the loop
    
*/

function oneAway(str1, str2) {
  let edits = 1;
  let max = Math.max(str1.length, str2.length);
  let diff = Math.abs(str1.length - str2.length);
  let current, compare;

  if (diff > 1) return false;

  for (let i = 0,  j = 0; i < max || j < max; i++, j++) {
    current = str1[i];
    compare = str2[j];

    if (current === compare) {
      continue;
    } else {
      if (str1[i+1] === compare) {
        i++;
      } else if (str2[j+1] === current) {
        j++;
      } 
      edits--;
      if (edits < 0) {
        return false;
      }
    }
  }

  return true;
}

// console.log(oneAway('ple', 'pale'), true)
// console.log(oneAway('pr', 'r'), true)
// console.log(oneAway('ale', 'al'), true)
// console.log(oneAway('azx', 'sdf'), false)
// console.log(oneAway('pales', 'pale'), true)
// console.log(oneAway('pale', 'bale'), true)
// console.log(oneAway('pale', 'bake'), false)
// console.log(oneAway('p', ''), true)
// console.log(oneAway('', 'bake'), false)
// console.log(oneAway('pr', 'rp'), false)
// console.log(oneAway('brrr', 'brrss'), false)
// console.log(oneAway('abc', 'acs'), false)
// console.log(oneAway('aple', 'aple'), true)

