const arr = [1, 7, 3, -5, 7, 3, 9];

function arrlenght(arr) {
  let length = 0;

  for (let i = 0; i < arr.length; i++) {
    length += 1;
  }
  return length;
}
console.log(arrlenght(arr));
let sum = 0;
function arrsum(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  return sum;
}

console.log(arrsum(arr));

function arrmult(arr) {
  let mul = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    mul *= element;
  }
  return mul;
}

console.log(arrmult(arr));
