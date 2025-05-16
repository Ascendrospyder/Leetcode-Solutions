/**
 * Sort Colors (LeetCode #75)
 * Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // Your solution here
  const merge = (nums: number[], left: number, mid: number, right: number) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
      L[i] = nums[left + i];
    }

    for (let j = 0; j < n2; j++) {
      R[j] = nums[mid + 1 + j];
    }

    let i = 0,
      j = 0;
    let k = left;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        nums[k] = L[i];
        i++;
      } else {
        nums[k] = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      nums[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      nums[k] = R[j];
      j++;
      k++;
    }
  };

  const mergeSort = (nums: number[], left: number, right: number) => {
    if (left >= right) {
      return;
    }

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);
  };

  mergeSort(nums, 0, nums.length - 1);
}

function sortColorsQuicker(nums: number[]): void {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Test cases
let test1 = [2, 0, 2, 1, 1, 0];
let test2 = [2, 0, 1];
let test3 = [0];

// Run tests
sortColors(test1);
sortColors(test2);
sortColors(test3);

console.log(test1); // Should print sorted array
console.log(test2); // Should print sorted array
console.log(test3); // Should print sorted array
