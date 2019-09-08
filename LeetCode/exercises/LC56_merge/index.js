var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  
  intervals.sort((a, b) => {
      return a[0] - b[0];
  })

  let interval = [];
  let idx = 0;
  interval.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
      const firstAtCurrent = intervals[i][0];
      const lastInInterval = interval[idx][1];

      if (firstAtCurrent <= lastInInterval) {
          interval[idx][1] = Math.max(lastInInterval, intervals[i][1]);
      } else {
          interval.push(intervals[i]);
          idx++;
      }
  }

  return interval
};

module.exports = merge;
