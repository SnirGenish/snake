let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
// mobile
let x = "";
up.addEventListener("click", () => {
  x = "up";
});
down.addEventListener("click", () => {
  x = "down";
});
left.addEventListener("click", () => {
  x = "left";
});
right.addEventListener("click", () => {
  x = "right";
  console.log(x);
});
window.addEventListener("click", (e) => {
  switch (x) {
    case "up":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "down":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "left":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "right":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});
