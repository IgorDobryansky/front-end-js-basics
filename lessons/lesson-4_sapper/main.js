const sapper = (width, height) => {
  const minesCount = Math.floor((width * height) / 6);

  const cellsGrid = createElement("div", "cells-grid");
  
  root.append(cellsGrid);

  cellsGrid.style.gridTemplateColumns = `repeat(${width}, 40px)`;
  cellsGrid.style.gridTemplateRows = `repeat(${height}, 40px)`;

  const totalCellsCount = width * height;

  cellsGrid.innerHTML =
    `<button class="cell" data-flag="0" data-open="0"></button>`.repeat(
      totalCellsCount
    );

  const cells = [...cellsGrid.children];

  const minesIndex = [...Array(totalCellsCount).keys()]
    .sort(() => Math.random() - 0.7)
    .slice(0, minesCount);

  const isBomb = (row, column) => {
    const index = row * width + column;
    return minesIndex.includes(index);
  };

  const isValid = (row, column) => {
    return row >= 0 && row < height && column >= 0 && column < width;
  };

  const loseGame = () => {
    cells.map((cell, index) => {
      if (minesIndex.includes(index)) {
        cell.innerHTML = BOMB;
        cell.style.background = "red";
        cell.setAttribute("data-open", "1");
      }
    });
  };

  const getBombsCountAroundCell = (row, column) => {
    let bombsCount = 0;
    for (let y = -1; y <= 1; y++) {
      for (let x = -1; x <= 1; x++) {
        isBomb(row + x, column + y) && bombsCount++;
      }
    }
    return bombsCount;
  };

  const openCell = (row, column) => {
    if (!isValid(row, column)) return;
    const index = row * width + column;
    const cell = cells[index];

    if (isBomb(row, column)) {
      loseGame();
      return;
    }

    const bombsCount = getBombsCountAroundCell(row, column);
    if (bombsCount !== 0) {
      cell.setAttribute("data-flag", "0");
      cell.innerHTML = bombsCount;
      cell.setAttribute("data-open", "1");
      return;
    }
    if (+cell.getAttribute("data-open") === 1) return;
    cell.setAttribute("data-open", "1");
    cell.setAttribute("data-flag", "0");
    cell.innerHTML = "";
    cell.style.backgroundColor = "white";

    for (let y = -1; y <= 1; y++) {
      for (let x = -1; x <= 1; x++) {
        openCell(row + x, column + y);
      }
    }
  };

  cellsGrid.addEventListener("click", (event) => {
    if (event.target.className !== "cell") return;

    const index = cells.indexOf(event.target);
    const column = index % width;
    const row = Math.floor(index / width);
    openCell(row, column);
  });

  cellsGrid.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (
      event.target.className !== "cell" ||
      +event.target.getAttribute("data-open") === 1
    ) {
      return;
    }
    
    event.target.innerHTML = FLAG;

    if (+event.target.getAttribute("data-flag") === 0) {
      event.target.setAttribute("data-flag", "1");
      event.target.innerHTML = "";
      event.target.innerHTML = FLAG;
    } else if (+event.target.getAttribute("data-flag") === 1) {
      event.target.setAttribute("data-flag", "0");
      event.target.innerHTML = "";
    }
  });
};

sapper(11, 11);
