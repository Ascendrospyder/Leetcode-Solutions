function maxArea(height: number[]): number {
  // Optimal method
  // initialise two pointers one at the start
  // and one at the end. We basically move these pointers based
  // on their value, if right is bigger than left we need to move left
  // so we can find something bigger potentially and vice versa.
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(area, maxArea);

    height[left] > height[right] ? right-- : left++;
  }
  return maxArea;
}

function maxAreaBruteForce(height: number[]): number {
  // Brute force method
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = (j - i) * Math.min(height[i], height[j]);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

// Test cases
const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const test2 = [1, 1];

console.log(maxArea(test1)); // Expected: 49
console.log(maxArea(test2)); // Expected: 1
