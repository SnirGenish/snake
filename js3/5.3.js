// function valid(password) {
//   if (password.length >= 7) {
//     console.log("strong");
//   } else {
//     console.log("weak");
//   }
// }

// let pass = "SSfSS";

// pass.length > 7 ? console.log("weak") : console.log("strong");

// function valid(password) {
//   if (password.length >= 7 && password.match(/[A-Z]/)) {
//     console.log("strong");
//   } else {
//     console.log("weak");
//   }
// }
// valid("ssassss");

function valval(pass) {
  pass.length >= 7 && /[A-Z]/.test(pass)
    ? console.log("very strong")
    : pass.length > 7
    ? console.log("strong")
    : console.log("weak");
}

valval("");
