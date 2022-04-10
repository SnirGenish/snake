let arr = ["Greg", "Mary", "Devon", "James"];
arr.unshift("Matt");
arr.push("alfonso");
for (let i = 0; i < arr.length; i++) {
  let gregin = arr.indexOf("Greg");
  let jamesin = arr.indexOf("James");
  if (gregin > -1) {
    let greg = arr.splice(gregin, 1);
  }
  if (jamesin > -1) {
    let James = arr.splice(jamesin, 1);
  }
  const element = arr[i];
  console.log(element);
}
