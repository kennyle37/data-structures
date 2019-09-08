var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => {
      return a[0] - b[0];
  })
  
  let min = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
      const currentStart = intervals[i][0];
      const currentEnd = intervals[1];
      
      if (end > currentStart) {
          min++;
          end = Math.min(currentEnd, end)
      } else {
          end = currentEnd;
      }
  }
  return min
};

module.exports = eraseOverlapIntervals;
