let arr = ["Greg", "Mary", "Devon", "James"];
arr.pop();
arr.shift();
arr.unshift("Matt");
arr.push("alfonso");
for (let i = 0; i < arr.indexOf("Mary") + 1; i++) {
  const element = arr[i];
  console.log(element);
}
console.log(arr);
let newarr = arr.slice(2);
console.log(newarr);
console.log(arr.indexOf("Mary"));
console.log(arr.indexOf("Foo"));
let spl = arr.splice(2, 1, "elizabeth", "Artie");

let cool = arr.concat("Bob");
console.log(cool);
