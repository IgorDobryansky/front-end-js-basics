import "./style.css";

import {
  recalculate as snakeRecalculate,
  render as snakeRender,
  getSnakeHead,
  snakeIntersection
} from "./snake.js";

import {
  recalculate as foodRecalculate,
  render as foodRender
} from "./food.js";

import { GAME_FIELD_SIZE, SNAKE_SPEED } from "./constants";

let gameOver = false;

const gamePlace = document.querySelector("#game");
gamePlace.style.gridTemplateRows = `repeat(${GAME_FIELD_SIZE}, 1fr)`;
gamePlace.style.gridTemplateColumns = `repeat(${GAME_FIELD_SIZE}, 1fr)`;

let lastRenderTime = 0;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      //   window.location = "/";
      location.reload();
    }
    return;
  }
  const renderTimeDiff = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);
  if (renderTimeDiff < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  recalculate();

  render();
}

window.requestAnimationFrame(main);

function recalculate() {
  snakeRecalculate();
  foodRecalculate();
  isGameOver();
}

function render() {
  gamePlace.innerHTML = "";
  snakeRender(gamePlace);
  foodRender(gamePlace);
}

function isGameOver() {
  gameOver = snakeIntersection() || outsideGameField(getSnakeHead());
}

function outsideGameField(position) {
  return (
    position.x < 1 ||
    position.x > GAME_FIELD_SIZE ||
    position.y < 1 ||
    position.y > GAME_FIELD_SIZE
  );
}
