class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const hasDuplication = (arr: string[]): boolean => {
            const seen = new Set<string>();
            for(const a of arr) {
                if(a === ".") continue;
                if(seen.has(a))
                    return true;
                seen.add(a);
            }
            return false;
        }
        const hasVirticalBoxsDuplications = (board: string[][], i: number): boolean => {
            for(let j = 3; j <= 9; j+=3) {
                const seen = new Set<string>();
                for(let k =i-3; k < i; k++) {
                    for(let l = j-3; l < j; l++) {
                        const a = board[k][l];
                        if(a === ".") continue;
                        if(seen.has(a))
                            return true;
                        seen.add(a);
                    }
                }
            }
            return false;
        }
        for (let i = 0; i < 9; i++) {
            const flag= i!==0 && !(i%3);
            if(hasDuplication(board[i])) return false;
            if(hasDuplication(board.map(row => row[i]))) return false;
            if(flag) 
                if(hasVirticalBoxsDuplications(board, i)) return false;
        }
        return true;
    }
}
