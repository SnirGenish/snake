let arr = ["asdf", "fdsaasdf", "d"];
function leng(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let ellength = element.length;
    newarr.push(ellength);
  }
  return newarr;
}
console.log(leng(arr));
