class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap= new Map<number, number>();
        for( const n of nums) {
            const count= freqMap.get(n) || 0;
            freqMap.set(n, count +1 );
        }
        if (k === freqMap.size) {
            return Array.from(freqMap.keys());
        }
        const sortedFreqBasedMap = new Map([...freqMap.entries()].sort((a, b) => b[1] - a[1]));
        const freqArr = Array.from(sortedFreqBasedMap.keys());
        return freqArr.slice(0, k);
    }
}
