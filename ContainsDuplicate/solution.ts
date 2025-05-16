function containsDuplicate(nums: number[]): boolean {
  // Write your solution here
  let result_hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in result_hashmap) {
      return true;
    } else {
      result_hashmap[nums[i]] = 0;
    }
  }

  return false;
}
