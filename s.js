import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  scc,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
let lastRenderTime = 0;
const SNAKE_SPEED = 4;
const gameBoard = document.querySelector("#game-board");
let gameOver = false;
const end = document.querySelector(".end");
const endtext = document.querySelector("#endscore");
const endBtn = document.querySelector("#endbtn");
const h1 = document.querySelector("h1");
endBtn.addEventListener("click", () => {
  location.reload();
});

function main(currentTime) {
  if (gameOver) {
    endtext.innerText = "score: " + scc;
    end.style.display = "flex";
    h1.style.animation = "asdf 7s";
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
