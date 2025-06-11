// https://stackblitz.com/~/github.com/maxgerashenko/conding-problems-2?file=BLINK_150_GRAPH/BTR_X_Letter%20Combinations%20of%20a%20Phone%20Number.ts
//
// Letter Combinations of a Phone Number


// use map for key as number and letters as value
// use DFS
// use backtracking for path
// add path to result when path length is === digits length

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    // Map each digit to corresponding letters
    const phoneMap: { [key: string]: string[] } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    const result: string[] = [];
    
    function dfs(index: number, path: string) {
        // If path length equals digits length, add to result
        if (path.length === digits.length) {
            result.push(path);
            return;
        }

        // Get letters mapped to the current digit
        const letters = phoneMap[digits[index]];
        
        // Iterate through letters and call DFS for each path
        for (let letter of letters) {
            dfs(index + 1, path + letter);
        }
    }

    // Start DFS with an empty path from index 0
    dfs(0, "");
    return result;
}