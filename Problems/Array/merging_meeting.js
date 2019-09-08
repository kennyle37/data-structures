  // Merge meetings ranges
  /*
    need a way to keep track of the ranges
    
    sort our list by startTime
      { startTime: 0,  endTime: 1 },
      { startTime: 3,  endTime: 5 },
      { startTime: 4,  endTime: 8 },
      { startTime: 9,  endTime: 10 },
      { startTime: 10, endTime: 12 },
      
    keep track of our startMin and endMin
    iterate through the list
      
      if startMin is undefined
        set the startMin and endMin
      
      case where startTime is less or equal than endMin
        check to see if we are at the last index
          push in { startTime: startMin, endTime: Math.max(endMin, EndTime)
        change endMin to be the max between current endTime and endMin
      
      case where startTime is greater than endMin
        check to see if we are at the last index
          push in { startTime: startMin, endTime: endMin }
          push in current
        push in { startTime: startMin, endTime: endMin }
          set startMin = startTime
          set endMin = endTime
  */

const mergeRanges = (meetings) => {
 meetings.sort((a,b) => a.startTime - b.startTime);
 let result = [];
 let startMin, endMin, current;
 
 for (let i = 0; i < meetings.length; i++) {
   current = meetings[i];
   const { startTime, endTime } = current;
   
   if (startMin === undefined) {
     startMin = startTime;
     endMin = endTime;
   } else if (startTime <= endMin) {
     if (i === meetings.length-1) {
       result.push({ "startTime": startMin, "endTime": Math.max(endMin, endTime) });
     }
     endMin = Math.max(endMin, endTime);
   } else if (startTime > endMin) {
       result.push({"startTime": startMin, "endTime": endMin});
       startMin = startTime;
       endMin = endTime;
       if (i === meetings.length-1) {
         result.push(current);
       } 
   }
  }
  return result;
}

module.exports = mergeRanges;
