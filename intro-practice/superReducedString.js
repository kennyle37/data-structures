/*
  Given a string containing lowercase characters, reduce the string to its shortest length 
  by removing all lowercase adjacent characters that matches

  If the final string is empty, return 'EMPTY STRING'

  superReducedString('aaabccddd') //aaabccddd → abccddd → abddd → abd
  superReducedString('aa') // 'Empty String'
  superReducedString('baab') baab → bb → 'Empty String'
*/

function superReducedString(s) {
  //split the string into an array with each individual chars as an index
  let split = s.split('');

  //loop through the split array
  for (let i = 0; i < split.length; i++) {
    let current = split[i];
    let next = split[i+1];

    //if two adjacent are equal, remove then via splice
    //and run the function recursively again by first joining the spliced array, turning into a string again
    if (current === next) {
      split.splice(i, 2);
      return superReducedString(split.join(''));
    }
  }

  //once we have removed all chars that are the same, return our original string with adjacents removed
  return (s === '' ? 'Empty String' : s);
}

console.log(superReducedString('abaad')) // 'ab'
console.log(superReducedString('aaaccdde')) // 'ae'
console.log(superReducedString('abc')) //abc
