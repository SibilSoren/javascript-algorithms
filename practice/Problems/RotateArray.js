const reverse = function (arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

const rotate = function (nums, k) {
  const n = nums.length;
  k %= n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
};
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);
console.log(nums);
