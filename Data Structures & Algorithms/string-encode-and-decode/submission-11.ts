class Solution {
    /**
     * @param {string[]} strs
     * @returns {string} 
     */
    encode(strs: string[]): string {
       let result: string = "";
       for( const s of strs ) {
          result += `${s.length}#${s}`;
       }
       return result;
    }
    decode(str: string): string[] {
        const result: string[] = [];
        let i: number = 0;
        while( i < str.length ) {
            let j: number = i;
            while( str[j] !== '#' ) {
                j++;
            }
            const length: number = parseInt(str.slice(i, j));
            result.push(str.slice(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return result;
    }
}