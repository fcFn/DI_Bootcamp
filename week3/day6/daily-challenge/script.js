// nstructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let str = ""
for (i = 0; i < 6; i++) {
  str += '* '
  console.log(str)
}

for (i = 0; i < 6; i++) {
  let str = ""
  for (j = -1; j < i; j++) {
    str += '* '
  }
  console.log(str)
}
