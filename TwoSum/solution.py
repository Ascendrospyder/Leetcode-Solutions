class Solution(object):
  def twoSum(self, nums, target):
    # initialise a hash map
    hash_map = {}

    # Go over each item in the list and check if the difference between the target and the current item is in the hash map
    # If it is, return the indices of the current item and the difference
    # Otherwise, add the current item to the hash map
    for i, n in enumerate(nums): 
      diff = target - n
      if diff in hash_map:
        return [hash_map[diff], i]
      hash_map[n] = i
    
    return
  
# Time complexity: O(n)
# Space complexity: O(n)