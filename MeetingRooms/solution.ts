export class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

function canAttendMeetings(intervals: Interval[]): boolean {
  // Your solution here
  // First we need to sort the intervals based on their start times
  intervals.sort((a: Interval, b: Interval) => a.start - b.start)
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i + 1].start < intervals[i].end) {
      return false;
    }
  }
  return true;
}

// Test cases
let meetingsTest1 = [
  [0, 30],
  [5, 10],
  [15, 20],
];
let meetingsTest2 = [
  [7, 10],
  [2, 4],
];

console.log(canAttendMeetings(meetingsTest1)); // should return false
console.log(canAttendMeetings(meetingsTest2)); // should return true
