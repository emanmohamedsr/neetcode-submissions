class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const freqMap: Map<string, string[]> = new Map();
        for (let i = 0; i < strs.length; i++) {
            const sortedStr = strs[i].split('').sort().join('');
            if (freqMap.has(sortedStr)) {
                freqMap.get(sortedStr)!.push(strs[i]);
            } else {
                freqMap.set(sortedStr, [strs[i]]);
            }
        }
        return Array.from(freqMap.values());
    }
}
