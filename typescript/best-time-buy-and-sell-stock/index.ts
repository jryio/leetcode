// [4,1,5,2,7]
function maxProfit(prices: number[]): number {
  let maxProfit = 0
  // min
  let minPriceIndex = 0
  let minPriceValue = 10 ** 5
  for (let i = 0; i < prices.length; i++) {
    // Is the current price less than anything I have seen before?
    if (prices[i] < minPriceValue) {
      minPriceIndex = i
      minPriceValue = prices[i]
    }
    // Does the current price minus the cheapest price I have found yield the
    // maximum possible profit?
    const diff = prices[i] - prices[minPriceIndex]
    if (diff > maxProfit) {
      maxProfit = diff
    }
  }
  return maxProfit
}
