//Practice-1 Q1
let x="tanu"
let z=7
console.log(x+z)

//Practice-1 Q2
console.log(typeof (x+z))

//Practice-1 Q3
const x1 = {      //x1 is the reference in this object so we can add new key on it
  name:"tanu",
  percentage:89.9,
  isprincipal: false
}
// x1= 65 // we cannot hold a number in  same const x

//Practice-1 Q4
x1['friend']="khushi"
x1['gender']="female"
console.log(x1)

//Practice-1 Q5
const dict={
  malevolent:"evil-minded",
  futility:"uselessness",
  yakka:"hardwork"
}
console.log(dict.yakka)
//or
console.log(dict['yakka'])
