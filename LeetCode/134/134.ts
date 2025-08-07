function canCompleteCircuit(gas: number[], cost: number[]): number {
    let start = gas.length
    let finish = 0
    let tank = 0
    let last = finish

    while (start > finish) {
        tank += gas[last] - cost[last]
        if ( tank < 0 ) {
            last = --start
        } else {
            last = ++finish
        }
    }

    if ( tank < 0 ) return -1
    return start % gas.length
}
