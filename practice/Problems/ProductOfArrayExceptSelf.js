const productExceptSelf = function (nums) {
  const n = nums.length;
  const prefixArr = [];
  prefixArr[0] = 1;
  for (let i = 1; i < n; i += 1) {
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
  }

  const suffixArr = [];
  suffixArr[n - 1] = 1;
  for (let i = n - 2; i >= 0; i -= 1) {
    suffixArr[i] = suffixArr[i + 1] * nums[i + 1];
  }

  console.log(prefixArr, '\n', suffixArr);

  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    result[i] = prefixArr[i] * suffixArr[i];
  }

  return result;
};

const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
