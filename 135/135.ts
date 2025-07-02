function candy(ratings: number[]): number {
    const candies = new Array<number>(ratings.length).fill(1)

    for (let i = 1; i < candies.length; ++i) {
        if ( ratings[i-1] < ratings[i] ) candies[i] = candies[i-1] + 1
    }

    for (let i = candies.length - 2; i >= 0; --i) {
        if (ratings[i] > ratings[i+1]) candies[i] = Math.max(candies[i], candies[i+1] + 1)
    }

    return candies.reduce((sum, next) => sum + next)

}