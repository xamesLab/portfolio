import React, { useState } from "react";
import ContentHeader from "../../main_component/ContentHeader";
import "./Graph.css";

const grid = [
  [0, 1, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0],
];

function Graph() {
  const [st, setSt] = useState(0);

  //depth-first search
  const dfs = (x, y) => {
    grid[x][y] = 0;

    for (let [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      let nextX = x + dx;
      let nextY = y + dy;

      if (intoGrid(nextX, nextY) && grid[nextX][nextY] === 1) {
        dfs(nextX, nextY);
      }
    }
  };

  const intoGrid = (x, y) => {
    let h = grid.length;
    let w = grid[0].length;

    return 0 <= x && x < h && 0 <= y && y < w;
  };

  return (
    <div className='wrap-graph'>
      <ContentHeader>{"Обход графа"}</ContentHeader>
      {grid.map((row, i) => (
        <div key={i}>
          {row.map((val, j) => (
            <div
              key={i * row.length + j}
              className={`cell ${val ? "cell-red" : "cell-green"}`}
              onClick={() => {
                if (val === 1) {
                  dfs(i, j);
                } else {
                  grid[i][j] = 1;
                }
                setSt(st + 1);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Graph;
