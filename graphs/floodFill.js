/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
   const originalColor = image[sr][sc];
    if (originalColor === color) return image; // no change needed

    const rows = image.length;
    const cols = image[0].length;

    function dfs(r, c) {
        // check boundaries and color match
        if (r < 0 || c < 0 || r >= rows || c >= cols || image[r][c] !== originalColor) {
            return;
        }

        image[r][c] = color;

        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }

    dfs(sr, sc);
    return image;
    
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))