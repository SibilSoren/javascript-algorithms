const maxSubarraySumCircular = function (nums) {
  let totalSum = nums[0];
  let maxSum = nums[0];
  let currentMaxSum = nums[0];

  let minSum = nums[0];
  let currentMinSum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    totalSum += nums[i];

    currentMaxSum = Math.max(nums[i], currentMaxSum + nums[i]);
    maxSum = Math.max(currentMaxSum, maxSum);

    currentMinSum = Math.min(nums[i], currentMinSum + nums[i]);
    minSum = Math.min(currentMinSum, minSum);
  }

  if (maxSum < 0) {
    return maxSum;
  }
  console.log('maxSum', maxSum, 'totalSum', totalSum);
  return Math.max(maxSum, totalSum - minSum);
};

// const nums = [8, -1, 3, 4];
// const nums = [5, -3, 5];
const nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums));
