/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let currMaxProfit = 0;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            currMaxProfit = Math.max(currMaxProfit, prices[r] - prices[l])
        } else {
            l = r;
        }
        r++;
    }
    return currMaxProfit;
};