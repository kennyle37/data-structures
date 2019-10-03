function minimumSwaps(arr) {
  let minSwapCount = 0;
  let unsorted = {};
  let sorted = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
      unsorted[i] = arr[i];
  }

  while (index < arr.length) {
      let min = Infinity;
      let minKey;
      let oldMin = min;

      for (let key in unsorted) {
          min = Math.min(min, unsorted[key]);
          if (oldMin !== min) {
              minKey = parseInt(key);
              oldMin = min;
          }
      }
      sorted.push(min);

      if (minKey !== index) {
          let storedMinKey = minKey;
          let valueAtSwapKey = unsorted[index];
          delete unsorted[minKey];
          delete unsorted[index];
          unsorted[storedMinKey] = valueAtSwapKey;
          minSwapCount++;
      } else {
          delete unsorted[minKey];
      }
      index++;
  }

  return minSwapCount;
}

module.exports = minimumSwaps;
