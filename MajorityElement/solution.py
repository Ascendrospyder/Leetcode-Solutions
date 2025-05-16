class Solution:
    def majorityElement(self, nums: List[int]) -> int:

        count_hashmap = {}

        for i in range(len(nums)):
            if nums[i] in count_hashmap:
                count_hashmap[nums[i]] += 1
            else:
                count_hashmap[nums[i]] = 0

        return max(count_hashmap, key=count_hashmap.get)
