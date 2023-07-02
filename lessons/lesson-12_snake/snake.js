import { getInputDirection } from "./input";
import { GAME_FIELD_SIZE } from "./constants";

const snakeBody = [
  {
    x: Math.floor(GAME_FIELD_SIZE / 2),
    y: Math.floor(GAME_FIELD_SIZE / 2)
  }
];

let newBodySegments = 0;

export function recalculate() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function render(gamePlace) {
  snakeBody.map((bodyPart) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = bodyPart.x;
    snakeElement.style.gridColumnStart = bodyPart.y;
    snakeElement.classList.add("snake");
    gamePlace.append(snakeElement);
  });
}

export function expandSnake(amount) {
  newBodySegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPosition(segment, position);
  });
}

function equalPosition(position1, position2) {
  return position1.x === position2.x && position1.y === position2.y;
}

function addSegments() {
  for (let i = 0; i < newBodySegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newBodySegments = 0;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  for (let i = 0; i < newBodySegments; i++) {
    return onSnake(snakeBody[0], { ignoreHead: true });
  }
}
