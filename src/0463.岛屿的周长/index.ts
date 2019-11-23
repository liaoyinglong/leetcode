/**
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
示例 :
输入:
 [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
输出: 16
 */
/**
 * 格子数量      周长
 * 1            4
 * 2            6
 * 3            8
 * 4            10
 * 5            12
 * 6            14
 * 7            16
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid: number[][]): number {
  let res = 0;

  let isPrevCelltruly = false;
  let prevRow: number[];

  for (const curRow of grid) {
    isPrevCelltruly = false;
    if (curRow.includes(1)) {
      curRow.forEach((cell, index) => {
        if (cell === 1) {
          res += 4;
          if (isPrevCelltruly) {
            res -= 2;
          }
          if (prevRow && prevRow[index]) {
            res -= 2;
          }
          isPrevCelltruly = true;
        } else {
          isPrevCelltruly = false;
        }
      });
    }
    prevRow = curRow;
  }

  return res;
};

console.log(islandPerimeter([[1, 1], [1, 1]]));
