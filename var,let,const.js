console.log("Program to understand var,let,const in JS")
let a=50;
var b="tanu";
const author="tanu"
// let   author=5 //throwa an error because constant cannot be changed

var c=null;
var d=undefined;
{
  var b='this'
  console.log(b)
}
console.log(b)
{
  let a=20;
  console.log(a)
}
console.log(a)
