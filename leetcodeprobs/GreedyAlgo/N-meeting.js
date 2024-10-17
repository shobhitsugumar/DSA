/**
 problem :N meetings in one room

 Input: n = 6, start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
Output: 4
Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)


solution : we take the start and end we put them in array we sort them according to the end time  and we keep track of prev end and we compare
           the prev end wiht the new start meeting time if the time is greater than the prev then we consider them 
 */

class meeting {
  constructor(start, end, pos) {
    this.start = start;
    this.end = end;
    this.pos = pos;
  }
}

//this comparator is used for sorting according to the end places

class meetingComparator {
  static compare(m1, m2) {
    if (m1.end < m2.end) return -1;
    if (m1.end > m2.end) return 1;
    if (m1.pos < m2.pos) return -1;
    return 1;
  }
}

function maxMeetings(start, end, n) {
  let meeting = []; // this is used to store the start time and end time of the meeting
  let ans = []; // this in case we need to return the position if interview asked
  for (let i = 0; i < n; i++) {
    meeting.push(new meeting(start[i], end[(i, i + 1)]));
  }

  //sort the meeting accoriding to the end
  meeting.sort(meetingComparator.compare);

  //intialie we push the postion of the first meeting
  ans.push(meeting[0].pos);

  let previousend = meeting[0].end; //this holds the prev meeting \

  for (let i = 1; i < n; i++) {
    if (meeting[i].start > previousend) {
      previousend = meeting[i].end;
      ans.push(meeting[i].pos);
    }
  }
  return ans.length;
}
