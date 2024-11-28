class Solution(object):
  def maxProfit(self, prices):
    min_prices = float('inf')
    max_profit = 0

    for price in prices:
      min_prices = min(min_prices, price)
      max_profit = max(max_profit, price - min_prices)
    
    return max_profit
  
# Example usage
prices = [7, 1, 5, 3, 6, 4]
solution = Solution()
print(solution.maxProfit(prices)) # 5
