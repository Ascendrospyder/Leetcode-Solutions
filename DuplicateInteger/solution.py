class Solution:
  # Time complexity: O(n)
  # Space complexity: O(n)
  def hasDuplicate(self, nums):
    hash_set = set()

    for num in nums:
      if num in hash_set:
        return True
      hash_set.add(num)

    return False
