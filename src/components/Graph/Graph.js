// обход графа в глубину DFS

// в поле отрисовки рисуется несколько графов-островков
// графы строится по двумерному массиву
// где каждый элемент массива равный 1 - это вершина графа
// ребра графа соединяют элементы только по горизонтали и вертикали

// обход идет рекурсивно, обнуляя каждую вершину
// при нажатии на вершину графа идет обход всего графа
// с обнуление всех вершин данного графа

// при нажатии на поле вне существующих графов
// появляется новый элемент, который образует новый граф
// или добавляется к существующим, в зависимости от расположения

// TODO:
// 1) построение островков случайным образом
// 2) отрисовка ребер графов

import React, { useState } from "react";
import ContentHeader from "../../main_component/ContentHeader";
import GitLink from "../../main_component/GitLink";
import "./Graph.css";

// массив для отрисовки графа
const grid = [
  [0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
];

function Graph() {
  // обновление стэйта для перерисовки графа
  const [st, setSt] = useState(0);

  //depth-first search
  const dfs = (x, y) => {
    // обнуление элемента
    grid[x][y] = 0;

    // проверка соседних элементов графа сверху/справа/снизу/слева
    for (let [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      let nextX = x + dx;
      let nextY = y + dy;

      // внутри поля и равен 1?
      if (intoGrid(nextX, nextY) && grid[nextX][nextY] === 1) {
        // рекурсивный вызов
        dfs(nextX, nextY);
      }
    }
  };

  // проверка на нахождение внутри поля
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
              className={`cell ${val ? "cell-node" : "cell-zero"}`}
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
      <GitLink text={"Обход графа"}>
        {"https://github.com/xamesLab/portfolio/tree/main/src/components/Graph"}
      </GitLink>
    </div>
  );
}

export default Graph;
