/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let max = 0;
  for (let i = 0; i < prices.length; i += 1) {
    for (let j = i; j < prices.length; j += 1) {
      const diff = prices[j] - prices[i];
      if (diff > max) {
        max = diff;
      }
    }
  }
  return max;
};

const maxProfitOptimal = function (prices) {
  let maxProfitValue = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    minPrice = Math.min(minPrice, prices[i]);

    maxProfitValue = Math.max(maxProfitValue, prices[i] - minPrice);
  }

  return maxProfitValue;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];
console.log(maxProfitOptimal(prices));
