/**
 * Rotate an array of n elements to the right by k steps.
 *
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 *
 * @param {number[]} nums - The array to be rotated
 * @param {number} k - The number of steps to rotate
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  /**
   * The following helper function will reverse a part of an array
   * based on the start and end parameters.
   * @param nums
   * @param start
   * @param end
   */
  const reverseArray = (nums: number[], start: number, end: number) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  // To solve this we need to
  k %= nums.length;

  // Our solution will be reversing it, we first reverse
  // our array e.g. [7, 6, 5, 4, 3, 2, 1]
  // Then we reverse the first k items e.g. [5, 6, 7, 4, 3, 2, 1]
  // Finally we reverse from k to nums.length e.g. [5, 6, 7, 1, 2, 3, 4]
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);
}

// Test cases
const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1); // Expected: [5, 6, 7, 1, 2, 3, 4]

const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2); // Expected: [3, 99, -1, -100]
