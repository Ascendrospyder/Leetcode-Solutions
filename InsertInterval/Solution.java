package InsertInterval;

import java.util.ArrayList;
import java.util.List;

class Solution {
  public int[][] insert(int[][] intervals, int[] newInterval) {
    List<int[]> result = new ArrayList<>();

    for (int i = 0; i < intervals.length; i++) {
      // If the current interval is completely before the new interval
      if (intervals[i][1] < newInterval[0]) {
        result.add(intervals[i]);
      }
      // If the current interval is completely after the new interval
      else if (intervals[i][0] > newInterval[1]) {
        result.add(newInterval); // Add the new interval before adding the rest
        newInterval = intervals[i]; // Update newInterval to the current interval
      }
      // Overlapping intervals, merge them
      else {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      }
    }
    // Add the remaining interval
    result.add(newInterval);

    return result.toArray(new int[result.size()][]);
  }
}
