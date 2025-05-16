function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const numSet = new Set<number>(nums);
  let maxSequenceLen = 0;

  for (const num of numSet) {
    // Only start counting if this is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      maxSequenceLen = Math.max(maxSequenceLen, currentStreak);
    }
  }

  return maxSequenceLen;
}
