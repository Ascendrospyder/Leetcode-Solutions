package BestTimeToBuySellStock;

public class Solution {
  public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;

    for (int i = 0; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
  }

  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] prices = {7, 1, 5, 3, 6, 4};
    System.out.println("Max Profit: " + solution.maxProfit(prices)); // Output: 5
  }
}
