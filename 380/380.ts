class RandomizedSet {
    private values = new Set<number>()

    insert(val: number): boolean {
        if (this.values.has(val)) {
            return false
        } else {
            this.values.add(val)
            return true
        }
    }

    remove(val: number): boolean {
        if ( this.values.has(val) ) {
            this.values.delete(val)
            return true
        } else {
            return false
        }
    }

    private randomInt(to: number) {
        return Math.random() * to >> 0
    }

    getRandom(): number {
        const index = this.randomInt(this.values.size)
        let i = 0
        for (const val of this.values) {
            if ( i++ === index ) return val
        }
        return NaN // This should never happen
    }
}
