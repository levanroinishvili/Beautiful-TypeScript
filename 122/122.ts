function maxProfit122(prices: number[]): number {
    let profit = 0;
     for (let i = 1; i < prices.length; ++i) {
        const overnightProfit = prices[i] - prices[i-1]
        if ( overnightProfit > 0 ) profit += overnightProfit
    }
    return profit
}
