// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;
  
  intervals.sort((a, b) => {
      return a[0] - b[0];
  })
  let end = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
      const currentMeeting = intervals[i];
      const currentMeetingStart = currentMeeting[0];
      const currentMeetingEnd = currentMeeting[1];
      
      if (currentMeetingStart <= end) {
          return false;
      } else {
          end = currentMeetingEnd;
      }
  }
  return true;
}

module.exports = canAttendMeetings;
