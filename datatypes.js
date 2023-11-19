let name = "mayank"; //string
let age = 30; //number
let status = true; //boolean
let obj = {
  name: "mayank",
  age: 30,
};
let empty = null;
let anotherempty;
let sym = Symbol();
console.table([
  typeof name,
  typeof age,
  typeof status,
  typeof obj,
  typeof empty,
  typeof anotherempty,
  typeof sym,
]);
