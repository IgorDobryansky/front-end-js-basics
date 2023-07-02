import { EXPAND_COUNT, GAME_FIELD_SIZE } from "./constants";
import { onSnake, expandSnake } from "./snake.js";

let food = getRandomFoodPosition();

export function recalculate() {
  if (onSnake(food)) {
    expandSnake(EXPAND_COUNT);
    food = getRandomFoodPosition();
  }
}

export function render(gamePlace) {
  const foodelement = document.createElement("div");
  foodelement.style.gridRowStart = food.x;
  foodelement.style.gridColumnStart = food.y;
  foodelement.classList.add("food");
  gamePlace.append(foodelement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomFoodPosition();
  }
  return newFoodPosition;
}

function randomFoodPosition() {
  return {
    x: Math.floor(Math.random() * GAME_FIELD_SIZE) + 1,
    y: Math.floor(Math.random() * GAME_FIELD_SIZE) + 1
  };
}
