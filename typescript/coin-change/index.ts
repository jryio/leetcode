// 322. Coin Change
//
// My proposed solution...
//
// I know this is Dynamic Programming, but I don't know exactly how I would
// structure it... Maybe a 2-D array of options whereby if I have DP[10] then I can walk the possible coin combinations
//
// Anyway, one hint is that the algorithm should not be greedy by choosing the
// largest denomination coin first...
//
// Example: Target = 13, Coins [11, 7, 6, 1]
// The greedy solution would give us 11 + 1 + 1 -> 3 coins
// The optimal solution would be 7 + 6 -> 2 coins
//
// The algorithm should compute coinChange(coins, amount - firstSelection)


// My naive solution is to effectively permutate over all of the combinations
// recursively!
//
// This DOES NOT use dynamic programming because it does not maintain an array
// of answers to walk through, this is instead a purely recursive solution...

// function coinChange(coins: number[], amount: number): number {
//   // The base case here is that we have an amount remaining of zero which takes
//   // zero coins
//   if (amount === 0) return 0

//   // We can satisfy a base case using exactly one coin
//   if (coins.includes(amount)) {
//     // console.log(`~~~ Exact match of ${amount} in ${coins} returning 1`)
//     return 1
//   }


//   let minNum = Infinity
//   // For all of the coins which
//   for (const c of coins) {
//     if (c <= amount) {
//       const num = coinChange(coins, amount - c)
//       if (num < minNum) {
//         minNum = num
//       }
//     }
//   }
//   if (minNum === Infinity) return - 1

//   return minNum >= 0 ? minNum + 1 : minNum
// };



// This is the correct solution using ChatGPT to explain how Dynamic Programming
// works...
//
// The algorithm will use an Array to store how many coins it takes takes to
// create that `amount` from values of `0 -> amount`
//
// For example:
//
// AMOUNT = 11
// COINS  = [1, 2, 5]
// DP     = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]
//
// This can be read as:
// - it takes 1 coins to make 1
// - it takes 1 coins to make 2
// - it takes 2 coins to make 3
// - it takes 2 coins to make 4
// - it takes 1 coins to make 5
// - it takes 2 coins to make 6
// - it takes 2 coins to make 7
// - it takes 3 coins to make 8
// - it takes 3 coins to make 9
// - it takes 2 coins to make 10
// - it takes 3 coins to make 11
//
// The core of the algorithm is the following code snippet:
//
// for (const c of coins) {
//   if (c <= i) {
//     dp[i] = Math.min(dp[i], dp[i - c] + 1)
//   }
// }
//
// This says, for any amount `i`, the number of coins needed is the minimum of:
// - The current number of coins computed in dp[i] (could be Infinity)
// - 1 coin (the current coin `c`) plus the number of coins needed to make the remainder (i-c) which we have probably already pre-computed...
//
// For example:
//
// If i = 11 and c = 1, then the minimum of MIN(dp[11] = Infinity, 1 + dp[10] = 2)
// Therefore dp[11] becomes 3 because 1 + dp[10] = 3
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i <= amount; i++) {
    for (const c of coins) {
      if (c <= i) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1)
      }
    }
  }

  // console.log("DP ARRAY -> ", dp)
  return dp[amount] === Infinity ? -1 : dp[amount]
}



// TESTS

let input = []
let amount = 0

input = [1, 2, 5]
amount = 11
console.log(`COINS = ${input} AMOUNT = ${amount} OUTUT = ${coinChange(input, amount)}`)

input = [1, 6, 7, 9, 11]
amount = 13
console.log(`COINS = ${input} AMOUNT = ${amount} OUTUT = ${coinChange(input, amount)}`)

input = [2]
amount = 3
console.log(`COINS = ${input} AMOUNT = ${amount} OUTUT = ${coinChange(input, amount)}`)

input = [1]
amount = 0
console.log(`COINS = ${input} AMOUNT = ${amount} OUTUT = ${coinChange(input, amount)}`)

input = [1, 2, 5]
amount = 100
console.log(`COINS = ${input} AMOUNT = ${amount} OUTUT = ${coinChange(input, amount)}`)
