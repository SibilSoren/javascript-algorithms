const containsDuplicate = function (nums) {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i += 1) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

const nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
