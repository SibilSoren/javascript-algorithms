const maxProduct = function (nums) {
  const n = nums.length;
  let maxEndingHere = nums[0];
  let minEndingHere = nums[0];
  let result = nums[0];
  for (let i = 1; i < n; i += 1) {
    const num = nums[i];
    const tempMax = Math.max(num, maxEndingHere * num, minEndingHere * num);

    minEndingHere = Math.min(num, maxEndingHere * num, minEndingHere * num);

    maxEndingHere = tempMax;
    result = Math.max(result, maxEndingHere);
  }
  return result;
};

// const nums = [2, 3, -2, 4];
// const nums = [-2, 0, -1];
const nums = [-3, -1, -1];
console.log(maxProduct(nums));
