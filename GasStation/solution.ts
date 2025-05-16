/**
 * Gas Station (LeetCode 134)
 *
 * There are n gas stations along a circular route, where the amount of gas at the
 * ith station is gas[i].
 *
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel
 * from the ith station to its next (i + 1)th station.
 *
 * Return the starting gas station's index if you can travel around the circuit once,
 * otherwise return -1.
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
  // setup a diff array which is a gas - cost. 
  let diff: number[] = [];
  let costTotal = 0;
  let gasTotal = 0;

  for (let i = 0; i < gas.length; i++) {
    diff.push(gas[i] - cost[i]);
    costTotal += cost[i];
    gasTotal += gas[i];
  }

  // If it costs more than the total gas we have
  // then we cannot have a solution
  if (costTotal > gasTotal) {
    return -1;
  }

  let total = 0;
  let idxOfInterest = 0;
  for (let j = 0; j < diff.length; j++) {
    total += diff[j];

    // greedy case
    if (total < 0) {
      total = 0;
      idxOfInterest = j + 1;
    }
  }

  return idxOfInterest;
}

// Test cases
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Expected: 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // Expected: -1
