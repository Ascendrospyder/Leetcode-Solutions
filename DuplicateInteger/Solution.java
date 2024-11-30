package DuplicateInteger;

import java.util.HashSet;
import java.util.Set;

public class Solution {
  public boolean containsDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<Integer>();
    for (int i = 0; i < nums.length; i++) {
      if (set.contains(nums[i])) {
        return true;
      }
      set.add(nums[i]);
    }
    return false;
  }
  // Example implementation
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    System.out.println(solution.containsDuplicate(nums)); // false
    int[] nums2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1};
    System.out.println(solution.containsDuplicate(nums2)); // true
  }
}
