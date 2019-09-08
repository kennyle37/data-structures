var climbStairs = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let store = [0,1,1,2] //n is 3
  
  for (let i = 3; i <=n ; i++) {
      if (store.length-1 === n) {
          return store[store.length-2] + store[store.length-1];
      } else {
          store[store.length] = store[store.length-2] + store[store.length-1]
      }
  }
};

module.exports = climbStairs;
