function minimumSubarray(nums) {
  let minSum = Infinity;
  let currentSum = Infinity;
  for (let i = 0; i < nums.length; i += 1) {
    currentSum = Math.min(nums[i], currentSum + nums[i]);
    minSum = Math.min(currentSum, minSum);
  }
  return minSum;
}

const nums = [8, -1, 3, 4];
console.log(minimumSubarray(nums));
