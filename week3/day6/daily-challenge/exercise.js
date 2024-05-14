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
