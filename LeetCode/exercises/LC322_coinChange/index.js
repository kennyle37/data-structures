var coinChange = function(coins, amount) {
  let min = 0;
  let dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
          if (i - coins[j] >= 0) {
              const currentChange = i - coins[j];
              dp[i] = Math.min(dp[currentChange] + 1, dp[i]);
          }
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

module.exports = coinChange;
