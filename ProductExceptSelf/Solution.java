package ProductExceptSelf;

import java.util.ArrayList;
import java.util.List;

public class Solution {
  public int[] productExceptSelf(int[] nums) {
    int[] result = new int[nums.length];
    int[] prefix = new int[nums.length];
    int[] postfix = new int[nums.length];

    // populate prefix
    for (int i = 0; i < nums.length; i++) {
      if (i == 0) {
        prefix[i] = nums[i];
      } else {
        prefix[i] = prefix[i - 1] * nums[i];
      }
    }

    // populate postfix
    for (int i = nums.length - 1; i >= 0; i--) {
      if (i == nums.length - 1) {
        postfix[i] = nums[i];
      } else {
        postfix[i] = nums[i] * postfix[i + 1];
      }
    }

    // For the index, we want to use the prefix before it
    // and the post fix after it and multiply it together
    for (int i = 0; i < nums.length; i++) {
      if (i == 0) {
        result[i] = postfix[i + 1];
      } else if (i == nums.length - 1) {
        result[i] = prefix[i - 1];
      } else {
        result[i] = postfix[i + 1] * prefix[i - 1];
      }
    }
    return result;
  }
}
