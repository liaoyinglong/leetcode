"use strict";
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
var islandPerimeter = function (grid) {
    let res = 0;
    let isPrevCelltruly = false;
    let prevRow;
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
                }
                else {
                    isPrevCelltruly = false;
                }
            });
        }
        prevRow = curRow;
    }
    return res;
};
console.log(islandPerimeter([[1, 1], [1, 1]]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNIOzs7Ozs7Ozs7R0FTRztBQUVIOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVMsSUFBZ0I7SUFDN0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRVosSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzVCLElBQUksT0FBaUIsQ0FBQztJQUV0QixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksRUFBRTtRQUN6QixlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM3QixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ2QsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDVCxJQUFJLGVBQWUsRUFBRTt3QkFDbkIsR0FBRyxJQUFJLENBQUMsQ0FBQztxQkFDVjtvQkFDRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzdCLEdBQUcsSUFBSSxDQUFDLENBQUM7cUJBQ1Y7b0JBQ0QsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsZUFBZSxHQUFHLEtBQUssQ0FBQztpQkFDekI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUNsQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9