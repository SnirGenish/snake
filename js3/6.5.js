let obj = {
  asdfP: "asdf",
};
let arr = new Array(100).fill(obj);
console.log(arr);
let hun = Array.from({ length: 100 }, (_, i) => i + 1);
let arr2 = [obj.asdfP];
let ato = Object.assign({}, hun);
console.log(ato);
console.log(Array.isArray(arr));
let arr3 = [234, 234, 345, 456, 567];
let newarr = arr3;
arr3[4] = "asdf";

let newarr2 = [...arr3];
arr3[1] = "asdf";
console.log(newarr2);
